const { get } = require('@base-cms/object-path');

module.exports = (page) => {
  const pageFor = get(page, 'for', false);
  const type = get(page, 'type');
  if (pageFor === 'content') {
    if (['whitepaper', 'webinar'].includes(type)) return false;
    return true;
  }
  return pageFor === 'website-section';
};
