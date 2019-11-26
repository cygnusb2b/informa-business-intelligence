const content = require('./content');
const taxonomy = require('./taxonomy');
const websiteSection = require('./website-section');

module.exports = ({ basedb }) => ({
  content: content({ basedb }),
  taxonomy: taxonomy({ basedb }),
  websiteSection: websiteSection({ basedb }),
  legacyTaxonomy: taxonomy({ basedb, field: 'legacy.id' }),
});
