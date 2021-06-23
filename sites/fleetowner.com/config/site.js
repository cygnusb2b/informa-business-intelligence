const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e89005aa56175543fc33',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'equipment', name: 'Equipment' },
    { alias: 'operations', name: 'Operations' },
  ],
  logos: {
    navbar: {
      src: 'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=30',
      srcset: [
        'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=45',
      srcset: [
        'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/fleetowner', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/fleetowner', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4050439', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'fleet.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-N69H89Q',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  removeSubscribeRoute: true,
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
  inquiry: {
    // the subject line of the email sent to the brand and/or the company/advertiser
    notificationSubject: 'FleetOwner.com has sent you a new sales inquiry.',
    // the subject line of the email sent to the user who submitted the form
    confirmationSubject: 'Your inquiry was received.',
    enabled: true,
    directSend: true, // enable this to directly send to the company
    sendTo: 'notifications@fleetowner.com',
    sendFrom: 'FleetOwner.com <noreply@baseplatform.io>',
    sendBcc: 'eActivity@endeavorb2b.com',
    logo: 'https://img.fleetowner.com/files/base/ebm/fleetowner/image/static/fleetowner-logo.png?h=60',
    bgColor: '#ffffff',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
