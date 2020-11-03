const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df007c705aa56547d43fc01',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'industry-stats', name: 'Industry Stats' },
    { alias: 'hot-topics', name: 'Hot Topics' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
  ],
  logos: {
    navbar: {
      src: 'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=30',
      srcset: [
        'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=45',
      srcset: [
        'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/electricalmktg', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'elecmktg.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-MQ9CK3N',
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
    notificationSubject: 'ElectricalMarketing.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@electricalmarketing.com',
    sendFrom: 'ElectricalMarketing.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.electricalmarketing.com/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
