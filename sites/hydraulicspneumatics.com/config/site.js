const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  leaders,
  identityX: {
    enabled: true,
    appId: '5df0e8dc05aa5681de43fc36',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'technologies/cylinders-actuators', name: 'Cylinders & Actuators' },
    { alias: 'technologies/hydraulic-valves', name: 'Hydraulic Valves' },
    { alias: 'technologies/hydraulic-pumps-motors', name: 'Hydraulic Pumps & Motors' },
  ],
  logos: {
    navbar: {
      src: 'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=30',
      srcset: [
        'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=45',
      srcset: [
        'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HydraulicsPneumatics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/H_and_P_knows', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/11091630', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'hnp.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-NNFQ6CV',
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
    notificationSubject: 'HydraulicsPneumatics.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@hydraulicspneumatics.com',
    sendFrom: 'HydraulicsPneumatics.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
