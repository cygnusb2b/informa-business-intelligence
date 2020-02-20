const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e8b205aa567ebb43fc35',
  },
  homePageSections: [
    { alias: 'ask-the-expert', name: 'Ask the Expert' },
    { alias: 'molds-cores', name: 'Molds/Cores' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=30',
      srcset: [
        'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=45',
      srcset: [
        'https://img.foundrymag.com/files/base/ebm/foundrymag/image/static/foundrymag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Foundry-Management-Technology/481245725222286', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FoundryMag', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'foundry.home' },
  gtm: {
    containerId: 'GTM-59NC7KQ',
  },
  gcse: {
    id: '003355913687346718228:xkayqmp937o',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
