const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'trailers', name: 'Trailers' },
    { alias: 'truck-bodies', name: 'Truck Bodies' },
    { alias: 'trailer-output', name: 'Trailer Output' },
  ],
  logos: {
    navbar: {
      src: 'https://img.trailer-bodybuilders.com/files/base/ebm/trailer-bodybuilders/image/static/trailer-bodybuilders-logo.png?h=30',
      srcset: [
        'https://img.trailer-bodybuilders.com/files/base/ebm/trailer-bodybuilders/image/static/trailer-bodybuilders-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.trailer-bodybuilders.com/files/base/ebm/trailer-bodybuilders/image/static/trailer-bodybuilders-logo.png?h=45',
      srcset: [
        'https://img.trailer-bodybuilders.com/files/base/ebm/trailer-bodybuilders/image/static/trailer-bodybuilders-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/trailerbodybuilders/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/trailerbb', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'trailerbody.home' },
  gtm: {
    containerId: 'GTM-NM9N92D',
  },
  gcse: {
    id: '003355913687346718228:rtbmywf7js2',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'https://s434533438.t.eloqua.com/e/f2',
};
