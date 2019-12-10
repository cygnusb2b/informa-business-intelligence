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
      { href: 'https://designengineering.informa.com/electronic-design/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/markets/automotive', label: 'Automotive' },
        { href: '/industrial-automation', label: 'Industrial Automation' },
        { href: '/technologies/analog', label: 'Analog' },
        { href: '/power-management', label: 'Power Management' },
        { href: '/technologies/embedded-revolution', label: 'Embedded Revolution' },
        { href: '/technologies/test-measurement', label: 'Test & Measurement' },
        { href: '/resources', label: 'Resources' },
        { href: '/community-home/electronic-design-blogs', label: 'Experts' },
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
        { href: 'https://designengineering.informa.com/electronic-design/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
