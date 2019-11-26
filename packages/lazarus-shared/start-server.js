const { startServer } = require('@base-cms/marko-web');
const gam = require('@endeavor-business-media/informa-gam/middleware');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');

module.exports = (options = {}) => {
  const { gamConfig, onStart } = options;
  return startServer({
    ...options,
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');
      if (gamConfig) app.use(gam(gamConfig));
      app.use(cleanResponse());
    },
  });
};
