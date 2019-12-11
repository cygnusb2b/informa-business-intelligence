const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/user/login', label: 'Log In', when: 'logged-out' },
      { href: '/user/logout', label: 'Log Out', when: 'logged-in' },
      { href: '/user/register', label: 'Register', when: 'logged-out' },
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://buildings.informa.com/contractor/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
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
        { href: '/nate-digital-editions', label: 'NATE Magazine' },
        { href: '/contractor-digital-editions', label: 'CONTRACTOR Digital Editions' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/page/contractor-industry-experts-and-advisors', label: 'Industry Experts and Advisors' },
        { href: '/about-us', label: 'About Us' },
        { href: 'https://buildings.informa.com/contractor/', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/learning-resources', label: 'Learning Resources' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
