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
      { href: 'https://designengineering.endeavorb2b.com/source-today', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/news', label: 'News' },
        { href: '/distribution', label: 'Distribution' },
        { href: '/industries', label: 'Industries' },
        { href: '/market-insights', label: 'Market Insights' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/viewpoint', label: 'Viewpoint' },
        { href: '/thought-leadership', label: 'Thought Leadership' },
        { href: '/rankings-research', label: 'Rankings & Research' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://sourceesb.com/', label: 'Find Parts' },
        { href: 'https://www.sourcetoday.com/distribution/digital-issue', label: 'Digital Issue' },
        { href: 'http://www.industryweek.com/supply-chain', label: 'Business of Manufacturing' },
        { href: 'http://directory.newequipment.com/products/electrical-and-electronics', label: 'Equipment Product Directory' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/source-today', label: 'Advertise', target: '_blank' },
        { href: 'https://www.sourcetoday.com/contributors', label: 'Contribute' },
        { href: 'https://electronics.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
