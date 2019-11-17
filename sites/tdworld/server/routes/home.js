const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/website-section-page');
const home = require('@endeavor-business-media/lazarus-shared/templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
