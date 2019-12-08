const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'industry-stats', name: 'Industry Stats' },
    { alias: 'hot-topics', name: 'Hot Topics' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/electricalmktg', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'elecmktg.home' },
  gtm: {
    containerId: 'GTM-MQ9CK3N',
  },
  gcse: {
    id: '003355913687346718228:wk6kiths385',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://endeavor.dragonforms.com/loading.do?omedasite=EMNewPref',
};
