const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e9b905aa56edd743fc3e',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'supply-chain', name: 'Supply Chain' },
    { alias: 'news', name: 'News' },
    { alias: 'news/distributor-news', name: 'Distributor News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=30',
      srcset: [
        'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=45',
      srcset: [
        'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/organization/11093979', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'sourcetoday.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-5VDJHFN',
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
    notificationSubject: 'SourceToday.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@sourcetoday.com',
    sendFrom: 'SourceToday.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.sourcetoday.com/files/base/ebm/sourcetoday/image/static/sourcetoday-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
