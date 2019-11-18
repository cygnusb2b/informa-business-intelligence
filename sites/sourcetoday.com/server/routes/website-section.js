const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@endeavor-business-media/lazarus-shared/templates/website-section');
const contactUs = require('@endeavor-business-media/lazarus-shared/templates/website-section/contact-us');
const queryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
