const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const { get, set } = require('@base-cms/object-path');
const gam = require('@endeavor-business-media/informa-gam/middleware');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');

const identityX = require('./identity-x');
const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');

module.exports = (options = {}) => {
  const { onStart } = options;
  const gamConfig = get(options, 'siteConfig.gam');
  return startServer({
    ...options,
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');
      // Setup GAM middleware (if configure).
      if (gamConfig) app.use(gam(gamConfig));
      // Force set all date formats.
      app.use((req, res, next) => {
        set(app.locals, 'markoCoreDate.format', 'MMM DD, YYYY');
        next();
      });
      // Setup IdentityX
      identityX(app, options);
      // Clean all response bodies.
      app.use(cleanResponse());
    },
    onAsyncBlockError: e => newrelic.noticeError(e),
  });
};
