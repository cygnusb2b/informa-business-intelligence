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
        { href: '/news', label: 'News' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/safety', label: 'Safety' },
        { href: '/fleet-management', label: 'Fleet Management' },
        { href: '/running-green', label: 'Running Green' },
        { href: '/technology', label: 'Technology' },
        { href: '/resources/white-papers', label: 'White Papers' },
        { href: '/resources/webinars', label: 'Webinars' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: 'https://informa.dragonforms.com/loading.do?pk=web2&omedasite=PEN6124_FRnew', label: 'Magazine Subscription', target: '_blank' },
        { href: '#', label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/advertise', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Statement', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
