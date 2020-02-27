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
      { href: 'https://buildings.informa.com/ecm', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/national-electrical-code', label: 'National Electrical Code' },
        { href: '/design', label: 'Design' },
        { href: '/construction', label: 'Construction' },
        { href: '/maintenance-repair-operations', label: 'Maintenance / Repair / Operations' },
        { href: '/safety', label: 'Safety' },
        { href: '/lighting-control', label: 'Lighting & Control' },
        { href: '/power-quality-reliability', label: 'Power Quality & Reliability' },
        { href: '/construction/intelligent-buildings', label: 'Intelligent Buildings' },
        { href: '/maintenance-repair-operations/energy-management', label: 'Energy Management' },
        { href: '/training', label: 'Training' },
        { href: '/renewables', label: 'Renewables' },
        { href: '/product-sourcing-supply', label: 'Product Sourcing & Supply' },
        { href: '/electrical-testing', label: 'Electrical Testing' },
        { href: '/safety/accidents-investigations', label: 'Accidents & Investigations' },
        { href: '/top-40-electrical-design-firms-landing-page', label: 'Top 40 Electrical Design Firms' },
        { href: '/top-50-electrical-contractors', label: 'Top 50 Electrical Contractors' },
        { href: '/blog/industry-viewpoint', label: 'Industry Viewpoint' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/whitepapers-0', label: 'White Papers' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/e-books-library', label: 'e-books Library' },
        { href: '/ecm-industry-experts-and-advisors', label: 'Industry Experts and Advisors' },
        { href: '/ecm-digital-editions', label: 'Digital Editions Archive' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/ecm', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
