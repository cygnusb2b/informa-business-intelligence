const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'green', name: 'Green' },
    { alias: 'planning-design', name: 'Planning & Design' },
    { alias: 'business-finance', name: 'Business & Finance' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/asumag/image/static/asumag-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/asumag/image/static/asumag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/asumag/image/static/asumag-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/asumag/image/static/asumag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/asumag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/asu_mag', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5W6GRZ7',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=929%0D',
};
