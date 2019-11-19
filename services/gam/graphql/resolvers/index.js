const deepAssign = require('deep-assign');
const { getAsArray } = require('@base-cms/object-path');
const GraphQLJSON = require('graphql-type-json');
const projection = require('../utils/adunit-projection');
const { DateType, ObjectIDType } = require('../types');

const { isArray } = Array;

const isFluid = size => size === 'fluid';

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
      size: ({ size }) => {
        if (!size) return [];
        if (isArray(size)) return size.filter(s => isArray(s)).map(s => s.join('x').trim().toLowerCase());
        return size.split(',').filter(v => v).map(v => v.trim().toLowerCase());
      },
      oop: ({ settings }) => Boolean(settings.out_of_page),

      /**
       * @todo replace [token:key] values and make safe for GAM (strip special chars).
       */
      targeting: ({ settings }) => getAsArray(settings, 'targeting')
        .filter(v => v && typeof v === 'object' && v.target && v.value)
        .reduce((o, { target, value }) => ({ ...o, [target]: value.trim() }), {}),
    },

    AdunitSize: {
      fluid: isFluid,
      width: (size) => {
        if (isFluid(size)) return null;
        const [width] = size.split('x');
        return width;
      },
      height: (size) => {
        if (isFluid(size)) return null;
        const [, height] = size.split('x');
        return height;
      },
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
