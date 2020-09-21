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
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'truckfleetmro.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-TS75GCS',
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
