const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('3834', { basePath: 'trailerbody.home' });

config
  .setTemplate('lb-main', {
    size: [[970, 250], [970, 90], [728, 90], [320, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [320, 50] },
    ],
  })
  .setTemplate('lb-list', {
    size: [[728, 90], [320, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [728, 90] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [320, 50] },
    ],
  })
  .setTemplate('mr', { size: [300, 250] })
  .setTemplate('sponsored-logo', { size: [[160, 65], [125, 125], [90, 90]], targeting: { pos: 'sponsoredlogo' } });

config
  .setAliasAdUnits('default', [
    { name: 'lb-section-page-main', templateName: 'lb-main', path: 'homepage' },
    { name: 'lb-content-page-main', templateName: 'lb-main', path: 'homepage' },
    { name: 'lb-section-page-list', templateName: 'lb-list', path: 'homepage' },
    { name: 'lb-content-page-list', templateName: 'lb-list', path: 'homepage' },
    { name: 'mr-section-page', templateName: 'mr', path: 'homepage' },
    { name: 'mr-content-page', templateName: 'mr', path: 'homepage' },
    { name: 'sponsored-logo-section-page', templateName: 'sponsored-logo', path: 'homepage' },
  ]);

module.exports = config;
