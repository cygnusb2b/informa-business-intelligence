const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e86e05aa56311743fc31',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'safety-technology', name: 'Safety Technology' },
    { alias: 'americas-safest-companies-awards', name: 'America\'s Safest Companies Awards' },
  ],
  logos: {
    navbar: {
      src: 'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=30',
      srcset: [
        'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=45',
      srcset: [
        'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/EHS-Today/66542218626?ref=ts', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/EHSToday', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4355311', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'ehs.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-KC2S36C',
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
    notificationSubject: 'EHSToday.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@ehstoday.com',
    sendFrom: 'EHSToday.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
