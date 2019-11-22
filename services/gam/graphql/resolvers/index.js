const deepAssign = require('deep-assign');
const { getAsArray } = require('@base-cms/object-path');
const { UserInputError } = require('apollo-server-express');
const GraphQLJSON = require('graphql-type-json');
const resolvePathTokens = require('../utils/resolve-path-tokens');
const projection = require('../utils/adunit-projection');
const { DateType, ObjectIDType } = require('../types');

const { isArray } = Array;

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
        const sizes = (isArray(size) ? size.join('x') : size).split(',');
        return sizes.map(formatSize).filter(s => s);
      },
      oop: ({ settings }) => Boolean(settings.out_of_page),

      /**
       * @todo replace [token:key] values and make safe for GAM (strip special chars).
       */
      targeting: ({ settings }) => getAsArray(settings, 'targeting')
        .filter(v => v && typeof v === 'object' && v.target && v.value)
        .reduce((o, { target, value }) => ({ ...o, [target]: value.trim() }), {}),

      sizeMapping: ({ settings }) => {
        const breakpoints = getAsArray(settings, 'breakpoints');
        return breakpoints.filter(bp => bp && typeof bp === 'object');
      },

      path: async ({ adunit }, _, ctx) => {
        const replacements = await resolvePathTokens(adunit, ctx);
        return replacements
          .reduce((str, { pattern, replacement }) => str.replace(pattern, replacement), adunit);
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
      adunits: async (_, { input }, { adunits }) => {
        const { location, position } = input;
        if (notImplemented.includes(location)) throw inputError(`The '${location}' location is currently not supported.`);
        const query = {
          'settings.location': location,
          ...(position && { 'settings.position': position }),
        };
        return adunits.find(query, { projection }).toArray();
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
