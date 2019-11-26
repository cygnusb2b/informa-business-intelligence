const express = require('express');
const helmet = require('helmet');
const graphql = require('./graphql/server');

const app = express();
app.use(helmet());
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

graphql({ app, path: '/' });

module.exports = app;
