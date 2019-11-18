const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'transportation-distribution', name: 'Transportation & Distribution' },
    { alias: 'global-supply-chain', name: 'Global Supply Chain' },
    { alias: 'labor-management', name: 'Labor Management' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/mhlnews/image/static/mhlnews-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/MaterialHandlingLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MHLeditor', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2003884', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCTO3PUFzLZbmdcva2Lq_bAQ', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TDLXZDD',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1899',
};
