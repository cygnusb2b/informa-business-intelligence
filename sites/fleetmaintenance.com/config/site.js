const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e89005aa56175543fc33',
    comments: { enabled: true },
  },
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
    { provider: 'facebook', href: 'https://www.facebook.com/FleetMaintenanceMag', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fleetmx', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/fm-mag/', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'fleetmaintenance.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
    containerId: 'GTM-5LVGPHG',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
