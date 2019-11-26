const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const context = require('./context');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = ({ app, path }) => {
  const server = new ApolloServer({
    schema,
    context,
    tracing: false,
    cacheControl: false,
    introspection: true,
    debug: !isProduction,
    playground: true,
  });
  server.applyMiddleware({ app, path });
};
