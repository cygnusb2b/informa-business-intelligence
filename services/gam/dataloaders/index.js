const websiteSection = require('./website-section');

module.exports = ({ basedb }) => ({
  websiteSection: websiteSection({ basedb }),
});
