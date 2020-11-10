const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df007b605aa565ec343fc00',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'design', name: 'Design' },
    { alias: 'maintenance-repair-operations', name: 'Maintenance, Repair & Operations' },
    { alias: 'construction', name: 'Construction' },
  ],
  logos: {
    navbar: {
      src: 'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=30',
      srcset: [
        'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=45',
      srcset: [
        'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ElectricalConstructionMaintenanceMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ecmweb', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2685562', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/ecmwebtv', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'ecm.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-MMN8GXJ',
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
    notificationSubject: 'ECMWeb.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@ecmweb.com',
    sendFrom: 'ECMWeb.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.ecmweb.com/files/base/ebm/ecmweb/image/static/ecmweb-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
