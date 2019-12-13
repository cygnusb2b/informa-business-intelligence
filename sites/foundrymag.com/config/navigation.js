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
      { href: 'https://designmanufacturing.informa.com/foundry/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/finishing', label: 'Finishing' },
        { href: '/materials', label: 'Materials' },
        { href: '/meltpour', label: 'Melt/Pour' },
        { href: '/moldscores', label: 'Molds/Cores' },
        { href: '/shakeout', label: 'Shakeout' },
        { href: '/simulationit', label: 'Simulation/IT' },
        { href: '/testingqc', label: 'Testing/QC' },
        { href: '/purchasing-and-mro', label: 'Purchasing and MRO' },
        { href: '/issues-and-ideas', label: 'Issues and Ideas' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/events', label: 'Events' },
        { href: 'http://directory.foundrymag.com/Main/DirectoryHome.aspx', label: 'Buyers\'s Guide' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designmanufacturing.informa.com/foundry/', label: 'Advertise' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
