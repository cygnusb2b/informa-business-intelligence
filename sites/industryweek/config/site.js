const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'operations', name: 'Operations' },
    { alias: 'leadership', name: 'Leadership' },
    { alias: 'technology-and-iiot', name: 'Technology and IIoT' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/iw/static/iw_logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/iw/static/iw_logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/iw/static/iw_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/iw/static/iw_logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/IndustryWeek/91310488418', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/IndustryWeek', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/industry-week', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/industryweek', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MQVBJZ5',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://mfg.informabi.com/LP=1551',
};
