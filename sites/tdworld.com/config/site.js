const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'distributed-energy-resources', name: 'Distributed Energy Resources' },
    { alias: 'electric-utility-operations', name: 'Electric Utility Operations' },
    { alias: 'electrification', name: 'Electrification' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/tdworld/image/static/tdworld-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/tdworldmag/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/tdworldmag', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4078692', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCD6JFCCOwOPu2v-KBcww_qw', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'tdworld.home' },
  gtm: {
    containerId: 'GTM-KPZQF6G',
  },
  gcse: {
    id: '003355913687346718228:gkva1amkty5',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://eb.informabi.com/LP=1056',
};
