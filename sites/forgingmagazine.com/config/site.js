const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    appId: '5df0e8a105aa56609143fc34',
  },
  homePageSections: [
    { alias: 'forming', name: 'Forming' },
    { alias: 'heating', name: 'Heating' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=30',
      srcset: [
        'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=45',
      srcset: [
        'https://img.forgingmagazine.com/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForgingMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ForgingMag', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'forging.home' },
  gtm: {
    containerId: 'GTM-MCQ2JVM',
  },
  gcse: {
    id: '003355913687346718228:cwb3pzkqv4r',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
