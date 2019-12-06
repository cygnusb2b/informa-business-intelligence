const { get } = require('@base-cms/object-path');

module.exports = page => ['content', 'website-section'].includes(get(page, 'for', false));
