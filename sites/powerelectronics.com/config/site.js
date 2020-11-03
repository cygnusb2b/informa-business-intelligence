const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e98905aa56bf2c43fc3c',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'technologies/power-management', name: 'Power Management' },
    { alias: 'technologies/alternative-energy', name: 'Alternative Energy' },
    { alias: 'markets/automotive', name: 'Automotive' },
  ],
  logos: {
    navbar: {
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=30',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=45',
      srcset: [
        'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/powerelectronicstech/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PowerElecTech', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'powertech.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-MKCRX6P',
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
    notificationSubject: 'PowerElectronics.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@powerelectronics.com',
    sendFrom: 'PowerElectronics.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.powerelectronics.com/files/base/ebm/powerelectronics/image/static/powerelectronics-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
