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
      { href: 'https://designengineering.endeavorb2b.com/electronic-design/', label: 'Advertise' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/markets/automotive', label: 'Automotive' },
        { href: '/technologies/power-management', label: 'Power Management' },
        { href: '/technologies/alternative-energy', label: 'Alternative Energy' },
        { href: '/learning-resources', label: 'Resources' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://sourceesb.com/', label: 'Find Parts' },
        { href: 'https://www.electronicdesign.com/', label: 'Electronic Design' },
        { href: 'https://www.mwrf.com/', label: 'RF Design' },
        { href: 'https://www.machinedesign.com/', label: 'Machine Design' },
        { href: 'https://www.sourcetoday.com/', label: 'Procurement' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/learning-resources/webcasts', label: 'Webinars' },
        { href: '/learning-resources/white-papers', label: 'White Papers' },
        { href: '/learning-resources/design-faqs', label: 'Design FAQs' },
        { href: '/learning-resources/basics-design', label: 'Basics of Design' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designengineering.endeavorb2b.com/electronic-design/', label: 'Advertise' },
        { href: '/page/contribute', label: 'Contribute' },
        { href: 'https://electronics.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
