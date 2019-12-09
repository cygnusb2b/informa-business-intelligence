const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'industrial-automation', name: 'Industrial Automation' },
    { alias: 'markets/automotive', name: 'Automotive' },
    { alias: 'power-management', name: 'Power Management' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electronicdesign/image/static/electronicdesign-logo.png?h=90 2x',
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
  newsletterSubscribeLink: 'https://design.informabi.com/LP=2980',
};
