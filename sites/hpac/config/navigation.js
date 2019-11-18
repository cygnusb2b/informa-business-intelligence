module.exports = {
  tertiary: {
    items: [
      { href: '/login', label: 'Log In' },
      { href: '/register', label: 'Register' },
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Statement', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/heating', label: 'Heating' },
        { href: 'http://beta.hpac.com/iaq-ventilation', label: 'Ventilation' },
        { href: 'http://beta.hpac.com/air-conditioning', label: 'Air Conditioning/Cooling' },
        { href: 'http://beta.hpac.com/building-controls', label: 'Building Automation' },
        { href: 'http://beta.hpac.com/piping-pumping', label: 'Piping/Pumping' },
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
