const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'power-management', name: 'Power Management' },
    { alias: 'alternative-energy', name: 'Alternative Energy' },
    { alias: 'automotive', name: 'Automotive' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/powerelectronicstech/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PowerElecTech', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MKCRX6P',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://design.informabi.com/LP=3220',
};
