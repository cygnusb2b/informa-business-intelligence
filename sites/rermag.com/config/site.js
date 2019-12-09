const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'business-technology', name: 'Business & Technology' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
    { alias: 'news-analysis/headline-news', name: 'Headline News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=30',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=45',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/rentalequipmentregister', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RERmagazine', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'rermag.home' },
  gtm: {
    containerId: 'GTM-WDNJSMG',
  },
  gcse: {
    id: '003355913687346718228:elxxajzzxkn',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://endeavor.dragonforms.com/loading.do?omedasite=RERnewpref',
};
