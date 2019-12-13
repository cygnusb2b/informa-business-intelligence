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
      { href: 'https://designengineering.informa.com/hydraulics-pneumatics/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/fluid-power-basics', label: 'Fluid Power Basics' },
        { href: '/technologies/hydraulic-valves', label: 'Hydraulic Valves' },
        { href: '/technologies/hydraulic-pumps-motors', label: 'Hydraulic Pumps & Motors' },
        { href: '/technologies/cylinders-actuators', label: 'Cylinders and Actuators' },
        { href: '/directories', label: 'Directories' },
        { href: '/learning-resources', label: 'Resources' },
        { href: '/community/hydraulics-pneumatics-experts', label: 'Experts' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'http://directory.manufacturers.hydraulicspneumatics.com/Main/DirectoryHome.aspx', label: 'Manufacturers Directory' },
        { href: 'http://directory.distributors.hydraulicspneumatics.com/Main/DirectoryHome.aspx', label: 'Distributors Directory' },
        { href: '/community/hydraulics-pneumatics-experts', label: 'Blogs' },
        { href: 'http://directory.newequipment.com/', label: 'Equipment Product Directory' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/webinar', label: 'Webinars' },
        { href: '/learning-resources/white-papers', label: 'White Papers' },
        { href: 'hydraulicswallchart', label: 'Wall Charts' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.informa.com/hydraulics-pneumatics/', label: 'Advertise', target: '_blank' },
        { href: '/contributors', label: 'Contribute' },
        { href: 'https://electronics.informa.com/contentstream/', label: 'Content Licensing', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
