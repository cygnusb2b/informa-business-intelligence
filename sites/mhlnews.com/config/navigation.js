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
        { href: '/covid19', label: 'COVID-19 Crisis' },
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
        { href: '/new-products', label: 'Latest Products & Services' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers & eBooks' },
        { href: '/podcasts', label: 'Podcasts' },
        { href: 'https://www.mfgtechshow.com/', label: 'Manufacturing & Technology Event', target: '_blank' },
        { href: 'https://www.safetyleadershipconference.com/', label: 'Safety Leadership Conference', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://manufacturing.endeavorb2b.com/mhl', label: 'Advertise', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
