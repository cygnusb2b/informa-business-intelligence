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
    appId: '5df0082605aa5695a243fc04',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'business-technology', name: 'Business & Technology' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
    { alias: 'news-analysis/headline-news', name: 'Headline News' },
  ],
  logos: {
    navbar: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=30',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=45',
      srcset: [
        'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/rentalequipmentregister', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RERmagazine', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'rermag.home' },
  gtm: {
    containerId: 'GTM-WDNJSMG',
  },
  gcse: {
    id: '003355913687346718228:elxxajzzxkn',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'A new inquiry submission was received.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: false, // enable this to directly send to the company
    sendTo: 'notifications@rermag.com',
    sendFrom: 'RERMag.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.rermag.com/files/base/ebm/rermag/image/static/rermag-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
