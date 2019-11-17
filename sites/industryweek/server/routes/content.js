const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const queryFragment = require('../graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
