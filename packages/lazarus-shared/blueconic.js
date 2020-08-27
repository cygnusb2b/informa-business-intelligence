const { getAsArray } = require('@base-cms/object-path');

const enabled = ({ site }) => Boolean(site.get('blueconic.enabled'));

module.exports = {
  enabled,

  /**
   * Determines if sticky promotions should be used.
   *
   * @param {object} params
   * @param {object} params.site The site config object
   * @param {object} params.promotion The promotion content object. Must include the `labels` field.
   */
  useStickyPromotions: ({ site, promotion }) => {
    // do not use when blueconic is globally disabled.
    if (!enabled({ site })) return false;
    // otherwise check the sticky promotions config value.
    const useStickyPromotions = site.get('blueconic.useStickyPromotions');
    switch (useStickyPromotions) {
      case 'always':
        // always use.
        return true;
      case 'never':
        // never use.
        return false;
      default:
        // only use when the promotion contains the `BlueConic` label.
        return getAsArray(promotion, 'labels').includes('BlueConic');
    }
  },
};
