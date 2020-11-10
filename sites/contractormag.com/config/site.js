const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df007a505aa563aa043fbff',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'plumbing', name: 'Plumbing' },
    { alias: 'technology', name: 'Technology' },
    { alias: 'codes', name: 'Codes' },
  ],
  logos: {
    navbar: {
      src: 'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=30',
      srcset: [
        'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=45',
      srcset: [
        'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CONTRACTOR-Magazine-95416372437', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/contractormag', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/2315441', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UC9xSPk9O1BEic3gaEoeUzaQ', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'conmag.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-W2SQ5T8',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'ContractorMag.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@contractormag.com',
    sendFrom: 'ContractorMag.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
