const { createMongoClient } = require('@base-cms/db');
const pkg = require('./package.json');
const { MONGO_DSN } = require('./env');

const { NODE_ENV } = process.env;
const appname = `${pkg.name} v${pkg.version} (env: ${NODE_ENV})`;

module.exports = createMongoClient(MONGO_DSN, { appname });
