const deepAssign = require('deep-assign');
const projection = require('../utils/adunit-projection');
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
      key: ({ machinename }) => machinename,
      name: ({ slot }) => slot.replace(/\[.*?\]\s/g, ''),
      sizes: ({ size }) => {
        if (!size) return [];
        if (isArray(size)) return size.filter(s => isArray(s)).map(s => s.join('x').trim().toLowerCase());
        return size.split(',').filter(v => v).map(v => v.trim().toLowerCase());
      },
      oop: ({ settings }) => Boolean(settings.out_of_page),
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
