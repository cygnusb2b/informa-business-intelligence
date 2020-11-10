const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  blueconic: {
    enabled: true,
  },
  identityX: {
    enabled: true,
    appId: '5df0e87f05aa56586843fc32',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'resources/technology-advancements', name: 'Technology Advancements' },
    { alias: 'resources/industry-insights', name: 'Industry Insights' },
    { alias: 'resources/products-and-solutions', name: 'Products and Solutions' },
  ],
  logos: {
    navbar: {
      src: 'https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=30',
      srcset: [
        'https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=45',
      srcset: [
        'https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/ElectronicDesign', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ElectronicDesgn', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4210549/profile', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '21687441225',
    basePath: 'elecdes.home',
    lazyLoad: {
      enabled: false, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-KTXH6VJ',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'ElectronicDesign.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@electronicdesign.com',
    sendFrom: 'ElectronicDesign.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=60',
    bgColor: '#ffffff',
  },
};
