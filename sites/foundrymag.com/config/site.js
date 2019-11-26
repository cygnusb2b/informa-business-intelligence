const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'ask-the-expert', name: 'Ask the Expert' },
    { alias: 'molds-cores', name: 'Molds/Cores' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Foundry-Management-Technology/481245725222286', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FoundryMag', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'foundry.home' },
  gtm: {
    containerId: 'GTM-59NC7KQ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1894',
};
