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
      { href: 'https://designmanufacturing.informa.com/mhl/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/transportation-distribution', label: 'Transportation & Distribution' },
        { href: '/facilities-management', label: 'Facilities Management' },
        { href: '/warehousing', label: 'Warehousing' },
        { href: '/global-supply-chain', label: 'Global Supply Chain' },
        { href: '/technology-automation', label: 'Technology & Automation' },
        { href: '/powered-vehicles-and-forklifts', label: 'Powered Vehicles & Forklifts' },
        { href: '/labor-management', label: 'Labor Management' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/drones-and-autonomous-vehicles', label: 'Drones & Autonomous Vehicles' },
        { href: '/trump-supply-chain', label: 'Trump & the Supply Chain' },
        { href: '/new-products', label: 'Latest Product & Services' },
        { href: '/webinars', label: 'Webinars' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://designmanufacturing.informa.com/mhl/', label: 'Advertise' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
