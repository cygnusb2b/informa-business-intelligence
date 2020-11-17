const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5f9b152313ad55340efa192d',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'in-the-bay', name: 'In the Bay' },
    { alias: 'shop-operations', name: 'Shop Operations' },
  ],
  logos: {
    navbar: {
      src: 'https://img.fleetmaintenance.com/files/base/ebm/fm/image/static/fm-logo.png?h=30',
      srcset: [
        'https://img.fleetmaintenance.com/files/base/ebm/fm/image/static/fm-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.fleetmaintenance.com/files/base/ebm/fm/image/static/fm-logo.png?h=45',
      srcset: [
        'https://img.fleetmaintenance.com/files/base/ebm/fm/image/static/fm-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/FleetMaintenanceMag', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fleetmx', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/fm-mag/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/cv_eschueller/', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '21687441225',
    basePath: 'fm-parent',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-5LVGPHG',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'Fleet Maintenance has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: false,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@fleetmaintenance.com',
    sendFrom: 'FleetMaintenance.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.fleetmaintenance.com/files/base/ebm/fm/image/static/fm-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
