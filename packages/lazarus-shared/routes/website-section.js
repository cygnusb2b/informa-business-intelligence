const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('../templates/website-section/leaders');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const directory = require('../templates/website-section/directory');
const queryFragment = require('../graphql/fragments/website-section-page');
const directoryFragment = require('../graphql/fragments/directory-page');

const directoryAliases = [
  'directory',
  'manufacturer-directory',
  'distributor-directory',
];

module.exports = (app) => {
  const { site } = app.locals;
  const leadersAlias = site.get('leaders.alias');

  if (leadersAlias) {
    app.get(`/:alias(${leadersAlias})`, withWebsiteSection({
      template: leaders,
      queryFragment: leadersFragment,
    }));
  }

  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  directoryAliases.forEach((alias) => {
    app.get(`/:alias(${alias})`, withWebsiteSection({
      template: directory,
      queryFragment: directoryFragment,
    }));

    app.get(`/:alias(${alias}/[a-z0-9-/]+)`, withWebsiteSection({
      template: directory,
      queryFragment: directoryFragment,
    }));
  });

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
