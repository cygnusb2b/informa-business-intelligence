const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'forming', name: 'Forming' },
    { alias: 'heating', name: 'Heating' },
    { alias: 'simulation-it', name: 'Simulation/IT' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/forgingmagazine/image/static/forgingmagazine-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ForgingMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ForgingMag', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MCQ2JVM',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1898',
};
