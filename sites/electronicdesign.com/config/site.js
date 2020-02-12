const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: false,
    appId: '5df0e87f05aa56586843fc32',
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
  gam: { accountId: '3834', basePath: 'elecdes.home' },
  gtm: {
    containerId: 'GTM-KTXH6VJ',
  },
  gcse: {
    id: '003355913687346718228:na9kwizpilb',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
