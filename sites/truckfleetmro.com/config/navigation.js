module.exports = {
  tertiary: {
    items: [
      // { href: '/login', label: 'Log In' },
      // { href: '/register', label: 'Register' },
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Statement', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/equipment', label: 'Equipment' },
        { href: '/fuels-lubricants', label: 'Fuels & Lubricants' },
        { href: '/news', label: 'News' },
        { href: '/regulatory-compliance', label: 'Regulatory Compliance' },
        { href: '/shop-management', label: 'Shop management' },
        { href: '/technology', label: 'Technology' },
        { href: '/resources/webinars', label: 'Webinars' },
        { href: '/resources/white-papers', label: 'White Papers' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '#', label: 'Magazine Subscription', target: '_blank' },
        { href: '#', label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Statement', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
