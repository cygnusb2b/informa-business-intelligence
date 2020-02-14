const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: true,
    appId: '5df0e86e05aa56311743fc31',
  },
  homePageSections: [
    { alias: 'safety', name: 'Safety' },
    { alias: 'safety-technology', name: 'Safety Technology' },
    { alias: 'americas-safest-companies-awards', name: 'America\'s Safest Companies Awards' },
  ],
  logos: {
    navbar: {
      src: 'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=30',
      srcset: [
        'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=45',
      srcset: [
        'https://img.ehstoday.com/files/base/ebm/ehstoday/image/static/ehstoday-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/pages/EHS-Today/66542218626?ref=ts', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/EHSToday', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4355311', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'ehs.home' },
  gtm: {
    containerId: 'GTM-KC2S36C',
  },
  gcse: {
    id: '003355913687346718228:5uytommdvry',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
