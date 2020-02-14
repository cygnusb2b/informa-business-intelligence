const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e93805aa563dd443fc39',
  },
  homePageSections: [
    { alias: 'transportation-distribution', name: 'Transportation & Distribution' },
    { alias: 'global-supply-chain', name: 'Global Supply Chain' },
    { alias: 'labor-management', name: 'Labor Management' },
  ],
  logos: {
    navbar: {
      src: 'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=30',
      srcset: [
        'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=45',
      srcset: [
        'https://img.mhlnews.com/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/MaterialHandlingLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MHLeditor', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2003884', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCTO3PUFzLZbmdcva2Lq_bAQ', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'mhl.home' },
  gtm: {
    containerId: 'GTM-TDLXZDD',
  },
  gcse: {
    id: '003355913687346718228:wtbiwvneht2',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
