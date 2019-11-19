const deepAssign = require('deep-assign');
const { DateType, ObjectIDType } = require('../types');

const { isArray } = Array;

module.exports = deepAssign(
  {
    /**
     * Custom scalar types.
     */
    Date: DateType,
    ObjectID: ObjectIDType,

    /**
     * Adunit Type
     */
    Adunit: {
      id: ({ _id }) => _id,
      name: ({ machinename }) => machinename,
      sizes: ({ size }) => {
        if (!size) return [];
        if (isArray(size)) return size.filter(s => isArray(s)).map(s => s.join('x').trim().toLowerCase());
        return size.split(',').filter(v => v).map(v => v.trim().toLowerCase());
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
        return adunits.find(query, {
          projection: { machinename: 1, size: 1 },
        }).toArray();
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
