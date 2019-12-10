const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      // { href: '/login', label: 'Log In' },
      // { href: '/register', label: 'Register' },
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://cv.informa.com/refrigerated-transporter-2/', label: 'Advertise' },
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
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://cv.informa.com/refrigerated-transporter-2/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
