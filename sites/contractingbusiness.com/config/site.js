const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0078f05aa56a96943fbfe',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'columns', name: 'Columns' },
    { alias: 'contracting-business-success', name: 'Contracting Business Success' },
    { alias: 'residential-hvac', name: 'Residential HVAC' },
  ],
  logos: {
    navbar: {
      src: 'https://img.contractingbusiness.com/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=30',
      srcset: [
        'https://img.contractingbusiness.com/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.contractingbusiness.com/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=45',
      srcset: [
        'https://img.contractingbusiness.com/files/base/ebm/contractingbusiness/image/static/contractingbusiness-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CBMag/?fref=ts', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ContractingBiz', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4078340', target: '_blank' },
  ],
  gam: {
    accountId: process.env.GAM_ACCCOUNT_ID || '3834',
    basePath: 'contractbus.home',
    lazyLoad: {
      enabled: true, // set to true to enable lazy loading
      fetchMarginPercent: 100, // fetch ad when one viewport away
      renderMarginPercent: 50, // render ad when half viewport away
      mobileScaling: 2, // double these on mobile
    },
  },
  gtm: {
    containerId: 'GTM-TPH92QZ',
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
