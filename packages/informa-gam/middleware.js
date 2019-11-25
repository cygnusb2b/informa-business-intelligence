
const fetch = require('node-fetch');
const gql = require('graphql-tag');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
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
    console.log('loading ad unit for', location);
    const key = createCacheKey(location, context);
    if (!cache.has(key)) {
      console.log('not in cache! setting for', location);
      const input = { location };
      const promise = apollo.query({ query, variables: { input } })
        .then(({ data }) => data.locationAdunits)
        .then(({ targeting, adunits }) => {
          const adunitMap = adunits.reduce((map, unit) => {
            const { position } = unit;
            if (!map.has(position)) map.set(position, []);
            map.get(position).push({
              ...unit,
              path: config.createAdUnitPath(unit.path),
              targeting: { ...unit.targeting, ...targeting },
            });
            return map;
          }, new Map());
          return adunitMap;
        });
      cache.set(key, promise);
    }
    console.log('found in cache', location);
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
