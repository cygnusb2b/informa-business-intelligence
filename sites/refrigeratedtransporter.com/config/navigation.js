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
      { href: 'https://cv.endeavorb2b.com/refrigerated-transporter-2', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/carriers', label: 'Carriers' },
        { href: '/cold-storage', label: 'Cold Storage' },
        { href: '/foodservice', label: 'Foodservice' },
        { href: '/fleet-equipment', label: 'Fleet Equipment' },
        { href: '/refrigeration', label: 'Refrigeration' },
        { href: '/business-tools', label: 'Business Tools' },
        { href: '/going-green', label: 'Going Green' },
        { href: '/resources', label: 'Resources' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/page/refrigerated-ltl-routing-guide', label: 'Refrigerated LTL Routing Guide' },
        { href: '/resources/buyers-guide', label: 'Refrigerated Fleet Equipment Buyer\'s Guide' },
        { href: '/page/reefer-repair-directory/refrigeration-unit-repair-directory', label: 'Refrigeration Unit Repair Directory' },
        { href: '/page/cold-storage-facilities/public-refrigerated-warehousing-and-distribution-directory', label: 'Public Refrigerated Warehouse & Distribution Directory' },
        { href: '/gross-revenue-reports/annual-gross-revenue-reports', label: 'Annual Gross Revenue Reports' },
        { href: '/event-calendar', label: 'Related Industry Events' },
        { href: '/classifieds', label: 'Jobs/Classifieds' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/__rss/all-published-content.xml', label: 'RSS' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://cv.endeavorb2b.com/refrigerated-transporter-2', label: 'Advertise', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
