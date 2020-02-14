const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0ea0005aa5628cd43fc41',
  },
  homePageSections: [
    { alias: 'shop-management', name: 'Shop Management' },
    { alias: 'technology', name: 'Technology' },
    { alias: 'equipment', name: 'Equipment' },
  ],
  logos: {
    navbar: {
      src: 'https://img.truckfleetmro.com/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=30',
      srcset: [
        'https://img.truckfleetmro.com/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.truckfleetmro.com/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=45',
      srcset: [
        'https://img.truckfleetmro.com/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  gam: { accountId: '3834', basePath: 'truckfleetmro.home' },
  gtm: {
    containerId: 'GTM-TS75GCS',
  },
  gcse: {
    id: '003355913687346718228:flqi0tftofi',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
