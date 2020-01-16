const startServer = require('@endeavor-business-media/lazarus-shared/start-server');

const sharedRoutes = require('@endeavor-business-media/lazarus-shared/routes');
const siteRoutes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes: (app) => {
    siteRoutes(app);
    sharedRoutes(app);
  },
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
