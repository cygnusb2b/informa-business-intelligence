const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e97405aa56ad4d43fc3b',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'plant-operations', name: 'Plant Operations' },
    { alias: 'research-and-development', name: 'Research and Development' },
    { alias: 'industry-trends', name: 'Industry Trends' },
  ],
  logos: {
    navbar: {
      src: 'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=30',
      srcset: [
        'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=45',
      srcset: [
        'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/NewEquipment', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/newequipment', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'newequipment.home' },
  gtm: {
    containerId: 'GTM-NGMR8Z5',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
