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
      { href: 'https://designengineering.endeavorb2b.com/hydraulics-pneumatics', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
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
        { href: '/page/community/hydraulics-pneumatics-experts', label: 'Experts' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/manufacturer-directory', label: 'Manufacturers Directory' },
        { href: '/distributor-directory', label: 'Distributors Directory' },
        { href: '/hydraulics-pneumatics-blogs', label: 'Blogs' },
        { href: 'http://directory.newequipment.com/', label: 'Equipment Product Directory' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/webinar', label: 'Webinars' },
        { href: '/learning-resources/white-papers', label: 'White Papers' },
        { href: '/page/hydraulicswallchart', label: 'Wall Charts' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/hydraulics-pneumatics', label: 'Advertise', target: '_blank' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
