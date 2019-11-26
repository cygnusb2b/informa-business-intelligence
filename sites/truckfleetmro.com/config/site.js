const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'shop-management', name: 'Shop Management' },
    { alias: 'technology', name: 'Technology' },
    { alias: 'equipment', name: 'Equipment' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/truckfleetmro/image/static/truckfleetmro-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  gam: { accountId: '3834', basePath: 'truckfleetmro.home' },
  gtm: {
    containerId: 'GTM-TS75GCS',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://tr.informabi.com/LP=1397',
};
