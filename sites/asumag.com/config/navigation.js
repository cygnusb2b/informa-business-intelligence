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
        { href: '/facilities-management/business-finance', label: 'Business & Finance' },
        { href: '/planning-design', label: 'Design' },
        { href: '/construction', label: 'Construction' },
        { href: '/energy', label: 'Energy/Lighting/HVAC' },
        { href: '/green', label: 'Green/Sustainability' },
        { href: '/facilities-management/maintenance-operations', label: 'Maintenance & Operations' },
        { href: '/research', label: 'Research/Reports' },
        { href: '/safety-security', label: 'Security' },
        { href: '/construction/technology-communications', label: 'Technology' },
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
