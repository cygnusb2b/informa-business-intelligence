const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e8f105aa56e67d43fc37',
  },
  homePageSections: [
    { alias: 'operations', name: 'Operations' },
    { alias: 'leadership', name: 'Leadership' },
    { alias: 'technology-and-iiot', name: 'Technology and IIoT' },
  ],
  homePagePrograms: [
    { alias: 'covid19', name: 'COVID-19 Crisis' },
    { alias: 'supply-chain-initiative', name: 'Supply Chain Initiative' },
  ],
  logos: {
    navbar: {
      src: 'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=30',
      srcset: [
        'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=45',
      srcset: [
        'https://img.industryweek.com/files/base/ebm/iw/static/iw_logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/IndustryWeek/91310488418', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/IndustryWeek', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/industry-week', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/industryweek', target: '_blank' },
  ],
  gam: { accountId: process.env.GAM_ACCCOUNT_ID || '3834', basePath: 'iw.home' },
  gtm: {
    containerId: 'GTM-MQVBJZ5',
  },
  gcse: {
    id: '003355913687346718228:kk42vab6p9v',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
