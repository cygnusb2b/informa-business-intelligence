const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'plant-operations', name: 'Plant Operatinos' },
    { alias: 'research-and-development', name: 'Research and Development' },
    { alias: 'industry-trends', name: 'Industry Trends' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/NewEquipment', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/newequipment', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'newequipment.home' },
  gtm: {
    containerId: 'GTM-NGMR8Z5',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1531',
};
