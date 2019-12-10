const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'fleet-management', name: 'Fleet Management' },
  ],
  logos: {
    navbar: {
      src: 'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=30',
      srcset: [
        'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=45',
      srcset: [
        'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/fleetowner', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fleetowner', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4050439', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'fleet.home' },
  gtm: {
    containerId: 'GTM-N69H89Q',
  },
  gcse: {
    id: '003355913687346718228:japjnxmbcvw',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
