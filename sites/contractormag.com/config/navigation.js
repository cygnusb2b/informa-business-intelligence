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
      { href: 'https://buildings.endeavorb2b.com/contractor', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/management', label: 'Business Management' },
        { href: '/codes', label: 'Code' },
        { href: '/hydronics', label: 'Hydronics' },
        { href: '/technology', label: 'Technology' },
        { href: '/tools', label: 'Tools' },
        { href: '/training', label: 'Training' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/radiant', label: 'Radiant' },
        { href: '/magazine', label: 'Back Issues' },
        { href: '/nate-digital-editions', label: 'NATE Magazine' },
        { href: '/contractor-digital-editions', label: 'CONTRACTOR Digital Editions' },
        { href: '/learning-resources/whitepapers', label: 'White Papers' },
        { href: '/learning-resources/webinar', label: 'Webinars' },
        { href: '/page/contractor-industry-experts-and-advisors', label: 'Industry Experts and Advisors' },
        { href: '/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/contractor', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/learning-resources', label: 'Learning Resources' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
