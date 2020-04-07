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
      { href: 'https://designengineering.informa.com/electronic-design/', label: 'Advertise' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
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
        { href: '/page/resources', label: 'Resources' },
        { href: '/blogs', label: 'Experts' },
        { href: '/covid-19', label: 'COVID-19' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'http://sourceesb.com/', label: 'Find Parts', target: '_blank' },
        { href: '/magazine-digital-archive', label: 'Digital Archive' },
        { href: '/learning-resources/webcasts', label: 'Webinars' },
        { href: '/learning-resources/white-paper', label: 'White Papers' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/electronic-design', label: 'Advertise', target: '_blank' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://electronics.informa.com/contentstream/', label: 'Content Licensing', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
