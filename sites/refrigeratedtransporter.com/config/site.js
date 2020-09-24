const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e9a805aa562e3843fc3d',
  },
  homePageSections: [
    { alias: 'carriers', name: 'Carriers' },
    { alias: 'foodservice', name: 'Food Service' },
    { alias: 'fleet-equipment', name: 'Fleet Equipment' },
  ],
  logos: {
    navbar: {
      src: 'https://img.refrigeratedtransporter.com/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=30',
      srcset: [
        'https://img.refrigeratedtransporter.com/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.refrigeratedtransporter.com/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=45',
      srcset: [
        'https://img.refrigeratedtransporter.com/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/RefrigeratedTransporter/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/rtmag', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'reftrans.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-PXKDQV7',
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
