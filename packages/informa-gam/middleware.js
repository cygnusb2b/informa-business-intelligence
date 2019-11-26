
const fetch = require('node-fetch');
const gql = require('graphql-tag');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const { asObject } = require('@base-cms/utils');
const { dasherize } = require('@base-cms/inflector');
const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const { GAM_SERVICE_URI, TENANT_KEY } = require('./env');

const createCacheKey = (location, context) => `${location}|${JSON.stringify(context || {})}`;

const query = gql`

query LoadAdUnits($input: LocationAdunitsQueryInput!) {
  locationAdunits(input: $input) {
    targeting
    adunits {
      id
      path
      position
      size {
        width
        height
      }
      sizeMapping {
        viewport {
          width
          height
        }
        size {
          width
          height
        }
      }
      targeting
      fluid
      oop
    }
  }
}

`;

module.exports = ({ accountId, basePath } = {}) => (req, res, next) => {
  const config = new GAMConfiguration(accountId, { basePath });
  const cache = new Map();
  const apollo = new ApolloClient({
    connectToDevTools: false,
    ssrMode: true,
    link: createHttpLink({ fetch, uri: GAM_SERVICE_URI, headers: { 'x-tenant-key': TENANT_KEY } }),
    cache: new InMemoryCache(),
  });
  const adunit = (location, context) => {
    const key = createCacheKey(location, context);
    if (!cache.has(key)) {
      const input = { location };
      const headers = Object.keys(asObject(context)).reduce((o, prop) => {
        const header = `x-${dasherize(prop)}`;
        return { ...o, [header]: context[prop] };
      }, {});
      const promise = apollo.query({ query, variables: { input }, context: { headers } })
        .then(({ data }) => data.locationAdunits)
        .then(({ targeting, adunits }) => adunits.reduce((map, unit) => {
          const { position } = unit;
          if (!map.has(position)) map.set(position, []);
          map.get(position).push({
            ...unit,
            path: config.createAdUnitPath(unit.path),
            targeting: { ...unit.targeting, ...targeting },
          });
          return map;
        }, new Map()));
      cache.set(key, promise);
    }
    return cache.get(key);
  };

  res.locals.gam = {
    cache,
    config,
    apollo,
    adunit,
  };
  next();
};
