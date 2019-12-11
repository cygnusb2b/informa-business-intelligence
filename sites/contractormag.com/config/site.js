const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    appId: '5df007a505aa563aa043fbff',
  },
  homePageSections: [
    { alias: 'plumbing', name: 'Plumbing' },
    { alias: 'technology', name: 'Technology' },
    { alias: 'codes', name: 'Codes' },
  ],
  logos: {
    navbar: {
      src: 'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=30',
      srcset: [
        'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=45',
      srcset: [
        'https://img.contractormag.com/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CONTRACTOR-Magazine-95416372437', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/contractormag', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/2315441', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UC9xSPk9O1BEic3gaEoeUzaQ', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'conmag.home' },
  gtm: {
    containerId: 'GTM-W2SQ5T8',
  },
  gcse: {
    id: '003355913687346718228:eosconuvhd1',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
