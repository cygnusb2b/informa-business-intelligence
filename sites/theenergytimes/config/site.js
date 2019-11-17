const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: '', name: '' },
    { alias: '', name: '' },
    { alias: '', name: '' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/_NOTSET_/image/static/tdworld-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/_NOTSET_/image/static/tdworld-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/_NOTSET_/image/static/tdworld-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/_NOTSET_/image/static/tdworld-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: '_NOTSET_', target: '_blank' },
    { provider: 'twitter', href: '_NOTSET_', target: '_blank' },
    { provider: 'linkedin', href: '_NOTSET_', target: '_blank' },
    { provider: 'youtube', href: '_NOTSET_', target: '_blank' },
  ],
  gtm: {
    containerId: '_NOTSET_',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: '_NOTSET_',
};
