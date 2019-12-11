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
      { href: 'https://cv.informa.com/american-trucker/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/news', label: 'News' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/business', label: 'Business' },
        { href: '/regulations', label: 'Regulations' },
        { href: '/safety', label: 'Safety' },
        { href: '/galleries', label: 'Galleries' },
        { href: '/american-trucker-magazine', label: 'American Trucker Magazine' },
        { href: '/inquire', label: 'Advertiser Info' },
        { href: 'http://equipmentsearch.trucker.com/', label: 'Equipment Search' },
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
        { href: 'https://cv.informa.com/american-trucker/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
