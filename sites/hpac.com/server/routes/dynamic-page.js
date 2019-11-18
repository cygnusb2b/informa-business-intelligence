const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const page = require('@endeavor-business-media/lazarus-shared/templates/dynamic-page');
const queryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
