const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0080805aa56af7a43fc03',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'air-conditioning', name: 'Air Conditioning' },
    { alias: 'building-automation', name: 'Building Automation' },
    { alias: 'heating', name: 'Heating' },
  ],
  logos: {
    navbar: {
      src: 'https://img.hpac.com/files/base/ebm/hpac/image/static/hpac-logo.png?h=30',
      srcset: [
        'https://img.hpac.com/files/base/ebm/hpac/image/static/hpac-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.hpac.com/files/base/ebm/hpac/image/static/hpac-logo.png?h=45',
      srcset: [
        'https://img.hpac.com/files/base/ebm/hpac/image/static/hpac-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/hpacengineering', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/HPACEng', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/7486557', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'hpac.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-P3L4HKV',
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
    notificationSubject: 'HPAC.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@hpac.com',
    sendFrom: 'HPAC.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.hpac.com/files/base/ebm/hpac/image/static/hpac-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
