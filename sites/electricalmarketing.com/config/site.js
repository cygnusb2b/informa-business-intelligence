const navigation = require('./navigation');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  homePageSections: [
    { alias: 'industry-stats', name: 'Industry Stats' },
    { alias: 'hot-topics', name: 'Hot Topics' },
    { alias: 'mergers-acquisitions', name: 'Mergers & Acquisitions' },
  ],
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/electricalmarketing/image/static/electricalmarketing-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://twitter.com/electricalmktg', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'elecmktg.home' },
  gtm: {
    containerId: 'GTM-MQ9CK3N',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: 'http://pages.electricalmarketing.com/em_newsletterpreference?oly_anon_id=63145555-0d9f-4706-955b-dfc6dbfb1453&oly_enc_id=%40%7Bencrypted_customer_id%7D%40',
};
