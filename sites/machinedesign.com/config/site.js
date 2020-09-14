const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e90605aa5648c343fc38',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'mechanical-motion-systems', name: 'Mechanical & Motion Systems' },
    { alias: '3d-printing-cad', name: '3D Printing & CAD' },
    { alias: 'automation-iiot', name: 'Automation & IIOT' },
  ],
  logos: {
    navbar: {
      src: 'https://img.machinedesign.com/files/base/ebm/machinedesign/image/static/machinedesign-logo.png?h=30',
      srcset: [
        'https://img.machinedesign.com/files/base/ebm/machinedesign/image/static/machinedesign-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.machinedesign.com/files/base/ebm/machinedesign/image/static/machinedesign-logo.png?h=45',
      srcset: [
        'https://img.machinedesign.com/files/base/ebm/machinedesign/image/static/machinedesign-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/MachineDesignMagazine/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MachineDesign', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/10998894', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'machdesign.home' },
  gtm: {
    containerId: 'GTM-TRLMK6G',
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSubscribe'),
};
