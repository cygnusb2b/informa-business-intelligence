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
      { href: 'https://designengineering.informa.com/machine-design/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/3d-printing-cad', label: '3D Printing & CAD' },
        { href: '/automation-iiot', label: 'Automation & IIoT' },
        { href: '/fastening-joining', label: 'Fastening & Joining' },
        { href: '/materials', label: 'Materials' },
        { href: '/mechanical-motion-systems', label: 'Mechanical & Motion Systems' },
        { href: '/medical-design', label: 'Medical Design' },
        { href: '/markets/robotics', label: 'Robotics' },
        { href: '/community/contributing-technical-experts', label: 'Experts' },
        { href: '/news/products', label: 'Product News' },
        { href: '/learning-resources', label: 'Learning Resources' },
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
        { href: 'https://designengineering.informa.com/machine-design/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
