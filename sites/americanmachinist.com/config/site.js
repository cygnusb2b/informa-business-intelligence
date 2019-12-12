const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: false,
    appId: '5df0e82405aa56699b43fc2f',
  },
  homePageSections: [
    { alias: 'machining-cutting', name: 'Machining / Cutting' },
    { alias: 'shop-operations', name: 'Shop Operations' },
    { alias: 'cutting-tools', name: 'Cutting Tools' },
  ],
  logos: {
    navbar: {
      src: 'https://img.americanmachinist.com/files/base/ebm/americanmachinist/image/static/americanmachinist-logo.png?h=30',
      srcset: [
        'https://img.americanmachinist.com/files/base/ebm/americanmachinist/image/static/americanmachinist-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.americanmachinist.com/files/base/ebm/americanmachinist/image/static/americanmachinist-logo.png?h=45',
      srcset: [
        'https://img.americanmachinist.com/files/base/ebm/americanmachinist/image/static/americanmachinist-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AmericanMachinist', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/AmericanMachnst', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2880425', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'amermach.home' },
  gtm: {
    containerId: 'GTM-56CR4G5',
  },
  gcse: {
    id: '003355913687346718228:pferilmwziq',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
