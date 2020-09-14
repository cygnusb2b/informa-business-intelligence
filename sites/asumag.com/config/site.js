const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0073005aa561c3543fbfd',
    comments: { enabled: true },
  },
  homePageSections: [
    { alias: 'green', name: 'Green' },
    { alias: 'planning-design', name: 'Planning & Design' },
    { alias: 'facilities-management/business-finance', name: 'Business & Finance' },
  ],
  logos: {
    navbar: {
      src: 'https://img.asumag.com/files/base/ebm/asumag/image/static/asumag-logo.png?h=30',
      srcset: [
        'https://img.asumag.com/files/base/ebm/asumag/image/static/asumag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.asumag.com/files/base/ebm/asumag/image/static/asumag-logo.png?h=45',
      srcset: [
        'https://img.asumag.com/files/base/ebm/asumag/image/static/asumag-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/asumag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/asu_mag', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'asumag.home' },
  gtm: {
    containerId: 'GTM-5W6GRZ7',
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
