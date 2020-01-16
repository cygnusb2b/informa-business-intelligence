const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const directory = require('@endeavor-business-media/lazarus-shared/templates/website-section/directory');
const directoryFragment = require('@endeavor-business-media/lazarus-shared/graphql/fragments/directory-page');

const directoryAliases = [
  'manufacturer-directory',
  'distributor-directory',
];

module.exports = (app) => {
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
};
