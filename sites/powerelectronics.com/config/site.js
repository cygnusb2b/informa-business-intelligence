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
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=30',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=45',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/powerelectronicstech/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PowerElecTech', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'powertech.home' },
  gtm: {
    containerId: 'GTM-MKCRX6P',
  },
  gcse: {
    id: '003355913687346718228:3ijfg6nawr7',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://design.informabi.com/LP=3220',
};
