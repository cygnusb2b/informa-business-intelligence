const gql = require('graphql-tag');
const { get } = require('@base-cms/object-path');
const { withContent } = require('@base-cms/marko-web/middleware');
const blueconic = require('../blueconic');
const content = require('../templates/content');
const company = require('../templates/content/company');
const print = require('../templates/content/print');
const slideshow = require('../templates/content/slideshow');
const fullWidth = require('../templates/content/full-width');
const queryFragment = require('../graphql/fragments/content-page');
const slideshowFragment = require('../graphql/fragments/content-slideshow-page');
const companyFragment = require('../graphql/fragments/content-company-page');

module.exports = (app) => {
  // get the site config off the app.
  const { site } = app.locals;

  app.get('/print/content/:id(\\d{8})', withContent({
    template: print,
    queryFragment,
    redirectOnPathMismatch: false,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyFragment,
  }));

  app.get('/*?(whitepaper|webinar)/:id(\\d{8})*', withContent({
    template: fullWidth,
    queryFragment,
  }));

  app.get('/*?media-gallery/:id(\\d{8})/:slug/slideshow', withContent({
    template: slideshow,
    queryFragment: slideshowFragment,
    redirectOnPathMismatch: false,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,

    // When blueconic is enabled, optionally allow "sticky" promotions
    // i.e. promotions that do not redirect to an external link
    ...(blueconic.enabled({ site }) && {
      // Pass a custom loader fragment to get the `siteContext.path` without the external `linkUrl`
      // Must also return the `labels` field so the BlueConic label can be checked
      loaderQueryFragment: gql`
        fragment WithContentPromotion on Content {
          ... on ContentPromotion {
            # needed to check for the BlueConic label
            labels
            # must use a field alias here, since siteContext is already used by the default loader fragment
            promotionContext: siteContext(input: { enableLinkUrl: false }) {
              path
            }
          }
        }
      `,
      // Handle the `redirectTo` value.
      // Only change when the content type is a promotion and sticky promotions are enabled.
      redirectToFn: ({ content: c }) => {
        const { redirectTo } = c;
        if (c.type !== 'promotion') return redirectTo;
        return blueconic.useStickyPromotions({ site, promotion: c }) ? null : redirectTo;
      },

      // Handle the `siteContext.path` value.
      // Use the `promotionContext.path` value when the content types is a promotion
      // and sticky promotions are enabled. Otherwise return normally.
      pathFn: ({ content: c }) => {
        const path = get(c, 'siteContext.path');
        const promotionPath = get(c, 'promotionContext.path');
        if (c.type !== 'promotion') return path;
        return blueconic.useStickyPromotions({ site, promotion: c }) ? promotionPath : path;
      },
    }),
  }));
};
