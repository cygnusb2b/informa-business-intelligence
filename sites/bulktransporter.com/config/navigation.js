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
      { href: 'https://cv.informa.com/bulk-transporter/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/fleet-management', label: 'Fleet Management' },
        { href: '/regulations', label: 'Regulations' },
        { href: '/hazmatsafety', label: 'Hazmat/Safety' },
        { href: '/green-trends', label: 'Green Trends' },
        { href: '/technology', label: 'Technology' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/resources', label: 'Resources' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/page/tank-cleaning-directory/tank-cleaning-directory', label: 'Tank Cleaning Directory' },
        { href: '/page/cargo-tank-repair-directory/cargo-tank-repair-directory', label: 'Cargo Tank Repair Directory' },
        { href: '/page/transload-directory/bulk-transload-facilities-directory', label: 'Bulk Transload Facilities Directory' },
        { href: '/page/depot-directory/tank-container-depot-directory', label: 'Tank Container Depot Directory' },
        { href: '/page/grossrevenue', label: 'Gross Revenue Reports' },
        { href: '/resources/events-calendar/article/21656378/convention-calendar', label: 'Convention Calendar' },
        { href: '/classifieds', label: 'Jobs/Classifieds' },
        { href: '/__rss/all-published-content.xml', label: 'RSS' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://cv.endeavorb2b.com/bulk-transporter', label: 'Advertise', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
