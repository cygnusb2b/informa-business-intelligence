const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const document = require('@endeavor-business-media/lazarus-shared/components/document');
const GAM = require('./config/gam');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
const components = require('./server/components');
const fragments = require('./server/fragments');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  document,
  components,
  fragments,
  onStart: (app) => {
    app.set('trust proxy', 'loopback, linklocal, uniquelocal');
    app.locals.GAM = GAM; // eslint-disable-line no-param-reassign
  },
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
