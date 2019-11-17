const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'fleet-management', name: 'Fleet Management' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/fleetowner', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fleetowner', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4050439', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-N69H89Q',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://tr.informabi.com/LP=1381',
};
