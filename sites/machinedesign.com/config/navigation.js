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
        { href: '/markets', label: 'Markets' },
        { href: 'http://www.electronicdesign.com/', label: 'Design with Electronics' },
        { href: 'http://directory.newequipment.com/', label: 'Equipment Product Directory' },
        { href: 'http://www.industryweek.com/', label: 'The Business of Manufacturing' },
        { href: 'http://www.hydraulicspneumatics.com/', label: 'Hydraulics & Pneumatics' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/learning-resources/webinars', label: 'Webinars' },
        { href: '/learning-resources/white-papers', label: 'White Papers' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.informa.com/machine-design/', label: 'Advertise' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://electronics.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
