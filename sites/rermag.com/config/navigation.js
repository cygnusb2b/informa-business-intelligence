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
      { href: 'https://buildings.endeavorb2b.com/rental-equipment-register', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
        { href: '/news-analysis', label: 'News & Analysis' },
        { href: '/business-technology', label: 'Business & Technology' },
        { href: '/aeriallifting', label: 'Aerial/Lifting' },
        { href: '/compaction-concrete', label: 'Compaction & Concrete' },
        { href: '/power-generation', label: 'Power Generation' },
        { href: '/earthmoving', label: 'Earthmoving' },
        { href: '/tools', label: 'Tools' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinar', label: 'Webinars' },
        { href: '/leaders', label: 'RER Leaders' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/magazine/5ed54885a38cdf29288b4624', label: 'Digital Back Issues' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://buildings.endeavorb2b.com/rental-equipment-register', label: 'Advertise', target: '_blank' },
        { href: '/classifieds', label: 'Jobs Listings' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: '/associations', label: 'Associations' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
