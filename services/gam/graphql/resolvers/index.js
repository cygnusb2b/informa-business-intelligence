const deepAssign = require('deep-assign');
const { getAsArray } = require('@base-cms/object-path');
const GraphQLJSON = require('graphql-type-json');
const projection = require('../utils/adunit-projection');
const { DateType, ObjectIDType } = require('../types');

const { isArray } = Array;

const SITE_ID_TOKEN = '[dfp_tag:site_id]';

const formatSize = (size) => {
  if (!size) return null;
  const s = `${size}`.trim().toLowerCase();
  if (!s) return null;
  if (/^\d+x\d+$/.test(s)) return s;
  return null;
};

const removeSiteId = path => path.replace(SITE_ID_TOKEN, '').replace(/^\/+/, '');

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

      path: ({ adunit }) => removeSiteId(adunit),
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
       *
       */
      adunits: async (_, { input }, { adunits }) => {
        const { location, position, target } = input;
        const query = {
          'settings.location': location,
          'settings.position': position,
          ...(target && { 'settings.targeting.target': 'pos', 'settings.targeting.value': target }),
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
