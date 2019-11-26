const { startServer } = require('@base-cms/marko-web');
const { get } = require('@base-cms/object-path');
const gam = require('@endeavor-business-media/informa-gam/middleware');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');

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
      if (gamConfig) app.use(gam(gamConfig));
      app.use(cleanResponse());
    },
  });
};
