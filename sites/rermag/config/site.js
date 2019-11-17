const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'business-technology', name: 'Business & Technology' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
    { alias: 'headline-news', name: 'Headline News' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/rermag/image/static/rermag-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/rermag/image/static/rermag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/rermag/image/static/rermag-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/rermag/image/static/rermag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/rentalequipmentregister', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RERmagazine', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WDNJSMG',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=1263',
};
