
const fetch = require('node-fetch');
const gql = require('graphql-tag');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const { asObject, asArray } = require('@base-cms/utils');
const { dasherize } = require('@base-cms/inflector');
const { getAsArray } = require('@base-cms/object-path');
const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const { GAM_SERVICE_URI, TENANT_KEY } = require('./env');

const createCacheKey = (location, context) => `${location}|${JSON.stringify(context || {})}`;

const mapSizes = size => asArray(size).map(({ width, height }) => [width, height]);

const buildAdunit = ({ unit, config, globalTargeting }) => ({
  ...unit,
  path: config.createAdUnitPath(unit.path),
  size: mapSizes(unit.size),
  sizeMapping: getAsArray(unit, 'sizeMapping').map(({ viewport: vp, size }) => ({ viewport: [vp.width, vp.height], size: mapSizes(size) })),
  targeting: { ...unit.targeting, ...globalTargeting },
});

const contextHeaders = context => Object.keys(asObject(context)).reduce((o, prop) => {
  const header = `x-${dasherize(prop)}`;
  return { ...o, [header]: context[prop] };
}, {});

const query = gql`

query LoadAdUnits($input: LocationAdunitsQueryInput!) {
  locationAdunits(input: $input) {
    targeting
    adunits {
      id
      key
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
  const adunit = ({ location, context }) => {
    const key = createCacheKey(location, context);
    if (!cache.has(key)) {
      const input = { location };
      const headers = contextHeaders(context);
      const promise = apollo.query({ query, variables: { input }, context: { headers } })
        .then(({ data }) => data.locationAdunits)
        .then(({ targeting: globalTargeting, adunits }) => adunits.reduce((map, unit) => {
          const { position } = unit;
          if (!map.has(position)) map.set(position, []);
          map.get(position).push(buildAdunit({ unit, config, globalTargeting }));
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
