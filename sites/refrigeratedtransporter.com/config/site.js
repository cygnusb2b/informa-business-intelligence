const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'carriers', name: 'Carriers' },
    { alias: 'foodservice', name: 'Food Service' },
    { alias: 'fleet-equipment', name: 'Fleet Equipment' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/refrigeratedtransporter/image/static/refrigeratedtransporter-logo.png?h=90 2x',
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
  newsletterSubscribeLink: 'https://tr.informabi.com/LP=1296',
};
