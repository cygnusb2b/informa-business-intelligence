const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('../templates/content');
const slideshow = require('../templates/content/slideshow');
const queryFragment = require('../graphql/fragments/content-page');
const slideshowFragment = require('../graphql/fragments/content-slideshow-page');

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
