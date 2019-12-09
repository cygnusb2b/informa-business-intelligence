const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('@endeavor-business-media/lazarus-shared/templates/content');
const slideshow = require('@endeavor-business-media/lazarus-shared/templates/content/slideshow');
const queryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/content-page');
const slideshowFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/content-slideshow-page');

module.exports = (app) => {
  app.get('/*?media-gallery/:id(\\d{8})/:slug/slideshow', withContent({
    template: slideshow,
    queryFragment: slideshowFragment,
    redirectOnPathMismatch: false,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
