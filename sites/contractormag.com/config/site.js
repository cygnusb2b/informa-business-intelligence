const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'plumbing', name: 'Plumbing' },
    { alias: 'best-practices', name: 'Best Practices' },
    { alias: 'codes', name: 'Codes' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/contractormag/image/static/contractormag-logo.png?h=90 2x',
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
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=962',
};
