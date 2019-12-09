const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'technology', name: 'Technology' },
    { alias: 'fleet-management', name: 'Fleet Management' },
  ],
  logos: {
    navbar: {
      src: 'https://img.bulktransporter.com/files/base/ebm/bulktransporter/image/static/bulktransporter-logo.png?h=30',
      srcset: [
        'https://img.bulktransporter.com/files/base/ebm/bulktransporter/image/static/bulktransporter-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.bulktransporter.com/files/base/ebm/bulktransporter/image/static/bulktransporter-logo.png?h=45',
      srcset: [
        'https://img.bulktransporter.com/files/base/ebm/bulktransporter/image/static/bulktransporter-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/bulktrans/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/bulktransporter', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'bulktrans.home' },
  gtm: {
    containerId: 'GTM-5KBQKZR',
  },
  gcse: {
    id: '003355913687346718228:mpbcpfhstju',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://tr.informabi.com/LP=1295',
};
