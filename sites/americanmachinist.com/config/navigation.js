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
      { href: 'https://designmanufacturing.informa.com/american-machinist', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/machining-cutting', label: 'Machining/Cutting' },
        { href: '/cutting-tools', label: 'Cutting Tools' },
        { href: '/automation-and-robotics', label: 'Automation/Robotics' },
        { href: '/enterprise-data', label: 'Enterprise Data' },
        { href: '/cmm-and-qc', label: 'CMM and QC' },
        { href: '/shop-operations', label: 'Shop Operations' },
        { href: '/cad-and-cam', label: 'CAD/CAM' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/calculators', label: 'Calculators' },
        { href: '/webinars-1', label: 'Webinars' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: 'http://directory.americanmachinist.com/Main/DirectoryHome.aspx', label: 'Buyers’ Guide' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designmanufacturing.informa.com/american-machinist', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
