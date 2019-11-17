const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('@endeavor-business-media/lazarus-shared/templates/content');
const queryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
