const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
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
  gam: { accountId: '3834', basePath: 'reftrans.home' },
  gtm: {
    containerId: 'GTM-PXKDQV7',
  },
  gcse: {
    id: '003355913687346718228:coz81wzqiux',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
