const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0083505aa568f1543fc05',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'distributed-energy-resources', name: 'Distributed Energy Resources' },
    { alias: 'electric-utility-operations', name: 'Electric Utility Operations' },
    { alias: 'electrification', name: 'Electrification' },
  ],
  logos: {
    navbar: {
      src: 'https://img.tdworld.com/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=30',
      srcset: [
        'https://img.tdworld.com/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.tdworld.com/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=45',
      srcset: [
        'https://img.tdworld.com/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/tdworldmag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/tdworldmag', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4078692', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCD6JFCCOwOPu2v-KBcww_qw', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'tdworld.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-KPZQF6G',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Since 1949, T&D World has provided utility professionals with critical information for electric power-delivery systems. T&D World connects the dots between energy delivery and usage audiences to educate on new ways to source, save and sell energy.',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'TD World has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@tdworld.com',
    sendFrom: 'TDWorld.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.tdworld.com/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
