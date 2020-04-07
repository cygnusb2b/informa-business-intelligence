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
      { href: 'https://manufacturing.endeavorb2b.com/mhl', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
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
        { href: '/directory', label: 'Buyers Guide' },
        { href: '/webinars', label: 'Webinars' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://manufacturing.endeavorb2b.com/mhl', label: 'Advertise', target: '_blank' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
