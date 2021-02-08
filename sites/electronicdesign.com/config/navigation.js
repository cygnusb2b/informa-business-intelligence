const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/21144843', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://designengineering.endeavorb2b.com/electronic-design', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/members', label: 'Members Content' },
        { href: '/page/resources', label: 'Read me First' },
        { href: '/markets/automotive', label: 'Automotive' },
        { href: '/industrial-automation', label: 'Industrial Automation' },
        { href: '/technologies/analog', label: 'Analog' },
        { href: '/power-management', label: 'Power Management' },
        { href: '/technologies/embedded-revolution', label: 'Embedded Revolution' },
        { href: '/technologies/test-measurement', label: 'Test & Measurement' },
        { href: '/blogs', label: 'Experts' },
        { href: '/covid-19', label: 'COVID-19' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/page/join', label: 'Member Benefits' },
        { href: 'https://sourceesb.com/', label: 'Find Parts', target: '_blank' },
        { href: '/magazine-digital-archive', label: 'Digital Archive' },
        { href: '/learning-resources/webcasts', label: 'Webinars' },
        { href: '/learning-resources/white-paper', label: 'White Papers' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/21144843', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/electronic-design', label: 'Advertise', target: '_blank' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
