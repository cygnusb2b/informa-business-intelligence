const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e9b905aa56edd743fc3e',
  },
  homePageSections: [
    { alias: 'supply-chain', name: 'Supply Chain' },
    { alias: 'news', name: 'News' },
    { alias: 'news/distributor-news', name: 'Distributor News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=30',
      srcset: [
        'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=45',
      srcset: [
        'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/organization/11093979', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'sourcetoday.home' },
  gtm: {
    containerId: 'GTM-5VDJHFN',
  },
  gcse: {
    id: '003355913687346718228:jqydhtzusms',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
