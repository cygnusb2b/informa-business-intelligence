const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
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
  gtm: {
    containerId: 'GTM-KPZQF6G',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
};
