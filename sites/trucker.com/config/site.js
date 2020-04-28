const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e9e305aa56e43c43fc40',
  },
  homePageSections: [
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'drivers', name: 'Drivers' },
    { alias: 'news', name: 'News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=30',
      srcset: [
        'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=45',
      srcset: [
        'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/American-Trucker-Magazine-37172697238/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/truckerAMT', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'trucker.home' },
  gtm: {
    containerId: 'GTM-56CR4G5',
  },
  gcse: {
    id: '003355913687346718228:xeytcg4mwld',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
