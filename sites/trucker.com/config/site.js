const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e9e305aa56e43c43fc40',
  },
  homePageSections: [
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'drivers', name: 'Drivers' },
    { alias: 'news', name: 'News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=30',
      srcset: [
        'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=45',
      srcset: [
        'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/American-Trucker-Magazine-37172697238/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/truckerAMT', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'trucker.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-56CR4G5',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'Trucker.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@trucker.com',
    sendFrom: 'Trucker.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.trucker.com/files/base/ebm/trucker/image/static/trucker-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
