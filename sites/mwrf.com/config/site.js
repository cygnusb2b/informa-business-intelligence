const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'defense', name: 'Defense' },
    { alias: 'components', name: 'Components' },
    { alias: 'systems', name: 'Systems' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/mwrf/image/static/mwrf-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/microwavesrf/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MicrowavesRF', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3848060/profile', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'mwrf.home' },
  gtm: {
    containerId: 'GTM-57VWSC8',
  },
  gcse: {
    id: '003355913687346718228:tcqzvu5juri',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://design.informabi.com/LP=3699',
};
