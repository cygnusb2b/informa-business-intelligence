const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e8f105aa56e67d43fc37',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'operations', name: 'Operations' },
    { alias: 'leadership', name: 'Leadership' },
    { alias: 'technology-and-iiot', name: 'Technology and IIoT' },
  ],
  homePagePrograms: [
    { alias: 'covid19', name: 'COVID-19 Crisis' },
    { alias: 'supply-chain-initiative', name: 'Supply Chain Initiative' },
  ],
  logos: {
    navbar: {
      src: 'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=30',
      srcset: [
        'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=45',
      srcset: [
        'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/IndustryWeek/91310488418', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/IndustryWeek', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/industry-week', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/industryweek', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'iw.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-MQVBJZ5',
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
    notificationSubject: 'IndustryWeek.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@industryweek.com',
    sendFrom: 'IndustryWeek.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=60',
    bgColor: '#ffffff',
  },
};
