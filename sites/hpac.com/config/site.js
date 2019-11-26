const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'air-conditioning', name: 'Air Conditioning' },
    { alias: 'building-automation', name: 'Building Automation' },
    { alias: 'heating', name: 'Heating' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/hpac/image/static/hpac-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/hpac/image/static/hpac-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/hpac/image/static/hpac-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/hpac/image/static/hpac-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/hpacengineering', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/HPACEng', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/7486557', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'hpac.home' },
  gtm: {
    containerId: 'GTM-P3L4HKV',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=1016%0D',
};
