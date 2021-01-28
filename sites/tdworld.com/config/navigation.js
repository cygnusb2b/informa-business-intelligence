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
      { href: 'https://energy.endeavorb2b.com/tdworld', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      { href: 'https://utilityanalytics.com/', label: 'Utility Analytics Institute', target: '_blank' },
      { href: 'TransmissionHub', label: 'Transmission Hub', target: '_blank' },
      { href: 'https://www.utilityproducts.com', label: 'Utility Products', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: '/careers', label: 'Careers & Jobs' },
        { href: '/disaster-response', label: 'Disaster Response' },
        { href: '/distributed-energy-resources', label: 'Distributed Energy Resources' },
        { href: '/electric-utility-operations', label: 'Electric Utility Operations' },
        { href: '/electrification', label: 'Electrification' },
        { href: '/grid-innovations', label: 'Grid Innovations' },
        { href: '/intelligent-undergrounding', label: 'Intelligent Undergrounding' },
        { href: '/overhead-distribution', label: 'Overhead Distribution' },
        { href: '/overhead-transmission', label: 'Overhead Transmission' },
        { href: '/renewables', label: 'Renewables' },
        { href: '/safety-and-training', label: 'Safety and Training' },
        { href: '/smart-utility', label: 'Smart Utility' },
        { href: '/substations', label: 'Substations' },
        { href: '/test-and-measurement', label: 'Test and Measurement' },
        { href: '/transmission-reliability', label: 'Transmission Reliability' },
        { href: '/utility-business', label: 'Utility Business' },
        { href: '/vegetation-management', label: 'Vegetation Management' },
        { href: '/wildfire', label: 'Wildfire' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://jobs.tdworld.com', label: 'Job Center', target: '_blank' },
        { href: '/apps-calculators ', label: 'Apps & Calculators' },
        { href: '/resources/webinars', label: 'Webinars' },
        { href: '/resources/white-papers', label: 'White Papers' },
        { href: '/magazine/5e6bac2ea1b8b3c9814ddb5d', label: 'Magazine Archive' },
        // { href: '/directory', label: 'Online Buyers\' Guide' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://energy.endeavorb2b.com/tdworld', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://utilityanalytics.com/', label: 'Utility Analytics Institute', target: '_blank' },
        { href: 'TransmissionHub', label: 'Transmission Hub', target: '_blank' },
        { href: 'https://www.utilityproducts.com', label: 'Utility Products', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },

      ],
    },
  ],
};
