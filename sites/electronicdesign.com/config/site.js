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
    { alias: 'industrial-automation', name: 'Industrial Automation' },
    { alias: 'markets/automotive', name: 'Automotive' },
    { alias: 'power-management', name: 'Power Management' },
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
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-KTXH6VJ',
  },
  gcse: {
    id: '003355913687346718228:na9kwizpilb',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
