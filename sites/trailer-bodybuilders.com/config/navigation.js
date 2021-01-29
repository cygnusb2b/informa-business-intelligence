const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://cv.endeavorb2b.com/trailer-body-builders', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/trailer-output', label: 'Trailer Output' },
        { href: '/trailers', label: 'Trailers' },
        { href: '/truck-bodies', label: 'Truck Bodies' },
        { href: '/trailer-dealers', label: 'Trailer Dealers' },
        { href: '/distributors-upfitters', label: 'Distributors, Upfitters' },
        { href: '/chassis', label: 'Chassis' },
        { href: '/equipment-parts', label: 'Equipment & Parts' },
        { href: '/fabrication', label: 'Fabrication' },
        { href: '/market-stats', label: 'Market Stats' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/equipment-parts/snow-ice', label: 'Snow & Ice Directory' },
        { href: '/classifieds', label: 'Jobs/Classifieds' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/magazine/5f070d62ee30bd2a008b45cc', label: 'What\'s In Print' },
        { href: '/trailers/article/21743431/trailerbody-builders-magazineissue-archives', label: 'Magazine Archives' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: '/__rss/all-published-content.xml', label: 'RSS' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://cv.endeavorb2b.com/trailer-body-builders', label: 'Advertise', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
