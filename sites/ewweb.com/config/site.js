const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: false,
    appId: '5df007e405aa56cc6c43fc02',
  },
  homePageSections: [
    { alias: 'news/people', name: 'People' },
    { alias: 'electrical-economy', name: 'Electrical Economy' },
    { alias: 'green-market', name: 'Green Market' },
  ],
  logos: {
    navbar: {
      src: 'https://img.ewweb.com/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=30',
      srcset: [
        'https://img.ewweb.com/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.ewweb.com/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=45',
      srcset: [
        'https://img.ewweb.com/files/base/ebm/ewweb/image/static/ewweb-logo.png?h=90 2x',
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
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
