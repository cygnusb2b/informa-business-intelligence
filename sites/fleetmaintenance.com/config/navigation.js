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
      { href: 'https://cv.endeavorb2b.com/fleet-maintenance/', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/equipment', label: 'Equipment' },
        { href: '/in-the-bay', label: 'In the Bay' },
        { href: '/shop-operations', label: 'Shop Operations' },
        { href: '/industry-news', label: 'Industry News' },
        { href: '/video-network', label: 'Video Network' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/tech-tips', label: 'Tech Tips' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinars', label: 'Webinars' },
        { href: '/whitepapers', label: 'Whitepapers' },
        { href: '/magazine', label: 'In Print' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: 'https://cv.endeavorb2b.com/fleet-maintenance/', label: 'Advertising Info', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
