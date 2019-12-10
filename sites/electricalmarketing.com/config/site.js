const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  homePageSections: [
    { alias: 'industry-stats', name: 'Industry Stats' },
    { alias: 'hot-topics', name: 'Hot Topics' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
  ],
  logos: {
    navbar: {
      src: 'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=30',
      srcset: [
        'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=45',
      srcset: [
        'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=90 2x',
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
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
