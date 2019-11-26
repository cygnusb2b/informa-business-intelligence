const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const gam = require('@endeavor-business-media/informa-gam/middleware');
const document = require('@endeavor-business-media/lazarus-shared/components/document');
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
    app.use(gam({ accountId: '3834', basePath: 'elecdes.home' }));
  },
  onAsyncBlockError: e => newrelic.noticeError(e),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
