const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'drivers', name: 'Drivers' },
    { alias: 'news', name: 'News' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/trucker/image/static/trucker-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/trucker/image/static/trucker-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/trucker/image/static/trucker-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/trucker/image/static/trucker-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/American-Trucker-Magazine-37172697238/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/truckerAMT', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'trucker.home' },
  gtm: {
    containerId: 'GTM-56CR4G5',
  },
  gcse: {
    id: '003355913687346718228:xeytcg4mwld',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://tr.informabi.com/LP=1385',
};
