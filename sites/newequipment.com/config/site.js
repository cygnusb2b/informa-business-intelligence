const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e97405aa56ad4d43fc3b',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'plant-operations', name: 'Plant Operations' },
    { alias: 'research-and-development', name: 'Research and Development' },
    { alias: 'industry-trends', name: 'Industry Trends' },
  ],
  logos: {
    navbar: {
      src: 'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=30',
      srcset: [
        'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=45',
      srcset: [
        'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/NewEquipment', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/newequipment', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'newequipment.home',
    lazyLoad: {
      enabled: false, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-NGMR8Z5',
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
    notificationSubject: 'NewEquipment.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@newequipment.com',
    sendFrom: 'NewEquipment.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.newequipment.com/files/base/ebm/newequipment/image/static/newequipment-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
