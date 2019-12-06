const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'news/people', name: 'People' },
    { alias: 'electrical-economy', name: 'Electrical Economy' },
    { alias: 'green-market', name: 'Green Market' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/elecwholesalingmag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ElecWholesaling', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2187051', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'elecwhole.home' },
  gtm: {
    containerId: 'GTM-PNM3CF6',
  },
  gcse: {
    id: '003355913687346718228:7vg6khra2ku',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=1006',
};
