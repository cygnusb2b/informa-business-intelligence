
const fetch = require('node-fetch');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');
const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const { GAM_SERVICE_URI, TENANT_KEY } = require('./env');

module.exports = ({ accountId, basePath } = {}) => (req, res, next) => {
  console.log('informa gam', { accountId, basePath });
  res.locals.gam = {
    config: new GAMConfiguration(accountId, { basePath }),
    apollo: new ApolloClient({
      connectToDevTools: false,
      ssrMode: true,
      link: createHttpLink({ fetch, uri: GAM_SERVICE_URI, header: { 'x-tenant-key': TENANT_KEY } }),
      cache: new InMemoryCache(),
    }),
  };
  next();
};
