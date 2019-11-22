const content = require('./content');
const websiteSection = require('./website-section');

module.exports = ({ basedb }) => ({
  content: content({ basedb }),
  websiteSection: websiteSection({ basedb }),
});
