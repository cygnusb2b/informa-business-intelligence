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
      { href: 'https://designmanufacturing.informa.com/forging/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/purchasing-and-mro', label: 'Purchasing and MRO' },
        { href: '/forming', label: 'Forming' },
        { href: '/heating', label: 'Heating' },
        { href: '/diesdie-materials', label: 'Die Design/Repair' },
        { href: '/simulationit', label: 'Simulation/IT' },
        { href: '/handling', label: 'Handling' },
        { href: '/qc', label: 'QC' },
        { href: '/issues-and-ideas', label: 'Issues and Ideas' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designmanufacturing.informa.com/forging/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
