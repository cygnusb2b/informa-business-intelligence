const deepAssign = require('deep-assign');
const { getAsArray } = require('@base-cms/object-path');
const { UserInputError } = require('apollo-server-express');
const GraphQLJSON = require('graphql-type-json');
const resolveTokens = require('../utils/resolve-tokens');
const projection = require('../utils/adunit-projection');
const { DateType, ObjectIDType } = require('../types');

const { isArray } = Array;

const ADUNIT_SPECIFIC_KEYS = ['pos', 'combo', 'article_number'];


const buildTargeting = async ({ settings, global = false, ctx }) => {
  const targeting = getAsArray(settings, 'targeting').filter((v) => {
    if (!v || !typeof v === 'object') return false;
    if (!v.target || !v.value) return false;
    if (global) return !ADUNIT_SPECIFIC_KEYS.includes(v.target);
    return ADUNIT_SPECIFIC_KEYS.includes(v.target);
  });
  const tokens = [...new Set(targeting.map(({ value }) => value).filter(value => /\[.*?:.+?\]/.test(value)))];
  const replacements = await resolveTokens(tokens, ctx);
  const replacementMap = replacements.reduce((map, { pattern, replacement }) => {
    map.set(pattern, replacement);
    return map;
  }, new Map());

  return targeting.map(({ target, value }) => {
    const replacementValue = replacementMap.get(value);
    return { target, value: replacementValue != null ? replacementValue : value };
  }).filter(({ value }) => value)
    .reduce((o, { target, value }) => ({ ...o, [target]: value }), {});
};

const inputError = message => new UserInputError(message);

const formatSize = (size) => {
  if (!size) return null;
  const s = `${size}`.trim().toLowerCase();
  if (!s) return null;
  if (/^\d+x\d+$/.test(s)) return s;
  return null;
};

const notImplemented = [
  'forums_category',
  'forums_landing',
  'forums_topic',
];

module.exports = deepAssign(
  {
    /**
     * Custom scalar types.
     */
    Date: DateType,
    ObjectID: ObjectIDType,
    JSON: GraphQLJSON,

    /**
     * Adunit Type
     */
    Adunit: {
      id: ({ _id }) => _id,
      key: ({ machinename }) => machinename,
      name: ({ slot }) => slot.replace(/\[.*?\]\s/g, ''),
      fluid: ({ size }) => size && `${size}`.toLowerCase() === 'fluid',
      size: ({ size }) => {
        if (!size) return [];
        if (size && `${size}`.toLowerCase() === 'fluid') return [];
        let stringSize = size;
        if (isArray(size)) {
          if (isArray(size[0])) {
            // Can be an array of multiple sizes, e.g. [[728, 90], [970, 90]]
            stringSize = size.map(s => s.join('x')).join(',');
          } else {
            // Or an array of a single size, e.g. [300, 250]
            stringSize = size.join('x');
          }
        }
        const sizes = stringSize.split(',');
        return sizes.map(formatSize).filter(s => s);
      },
      oop: ({ settings }) => Boolean(settings.out_of_page),

      targeting: ({ settings }, _, ctx) => buildTargeting({ settings, global: false, ctx }),

      sizeMapping: ({ settings }) => {
        const breakpoints = getAsArray(settings, 'breakpoints');
        return breakpoints.filter(bp => bp && typeof bp === 'object');
      },

      path: async ({ adunit, hasProgram }, _, ctx) => {
        const tokens = adunit.match(/\[.*?:.+?\]/g);
        const replacements = await resolveTokens(tokens, ctx);
        const replaced = replacements
          .reduce((str, { pattern, replacement }) => str.replace(pattern, replacement), adunit);
        if (!hasProgram) return replaced;
        return replaced.replace('/article/', '/program/');
      },

      location: ({ settings }) => settings.location,
      position: ({ settings }) => settings.position,
    },

    AdunitSize: {
      width: (size) => {
        const [width] = size.split('x');
        return width;
      },
      height: (size) => {
        const [, height] = size.split('x');
        return height;
      },
    },

    AdunitSizeMapping: {
      viewport: ({ browser_size: size }) => size,
      size: ({ ad_sizes: sizes }) => sizes.split(','),
    },

    AdunitToken: {
      id: ({ _id }) => _id,
      token: ({ _id }) => _id,
    },

    /**
     * Root queries.
     */
    Query: {
      /**
       *
       */
      ping: () => 'pong',

      /**
       * No additional context required:
       * - author
       * - commodoties
       * - homepage
       * - search
       * - user
       * - weather
       *
       * Context required:
       * - article: x-content-id
       * - commodities: x-request-path
       * - gallery: x-content-id
       * - page: x-content-id
       * - taxonomy: x-section-id
       *
       * Not supported/implemented:
       * - forums_category
       * - forums_topic
       * - forums_landing
       */
      locationAdunits: async (_, { input }, ctx) => {
        const { adunits } = ctx;
        const { location } = input;
        const prefix = location === 'taxonomy' ? 'term' : location;
        if (notImplemented.includes(location)) throw inputError(`The '${location}' location is currently not supported.`);
        const [globalUnit, units] = await Promise.all([
          adunits.findOne({ machinename: `${prefix}_728_1_a` }, { projection }),
          adunits.find({ 'settings.location': location }, { projection }).toArray(),
        ]);
        const globalTargeting = await buildTargeting({
          settings: globalUnit.settings,
          global: true,
          ctx,
        });
        return {
          targeting: globalTargeting,
          adunits: units.map(u => ({ ...u, hasProgram: Boolean(globalTargeting.program) })),
        };
      },

      /**
       *
       */
      allAdunits: async (_, { input }, { adunits }) => {
        const { pathType, positions, locations } = input;
        const query = {
          ...(pathType === 'static' && { 'tokens.0': { $exists: false } }),
          ...(pathType === 'dynamic' && { 'tokens.0': { $exists: true } }),
          ...(positions.length && { 'settings.position': { $in: positions } }),
          ...(locations.length && { 'settings.location': { $in: locations } }),
        };
        return adunits.find(query, { projection }).toArray();
      },

      /**
       *
       */
      adunitTokens: async (_, args, { adunits }) => {
        const docs = await adunits.aggregate([
          { $match: { 'tokens.0': { $exists: true } } },
          { $unwind: '$tokens' },
          { $group: { _id: '$tokens', locations: { $addToSet: '$settings.location' } } },
        ]).toArray();
        return docs;
      },
    },

    /**
     * Root mutations.
     */
    Mutation: {
      /**
       *
       */
      ping: () => 'pong',
    },
  },
);
