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
      { href: 'https://buildings.informa.com/american-school-and-university/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
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
        { href: '/page/awards', label: 'Awards & Competitions' },
        { href: '/american-school-university-digital-edition-archive', label: 'AS&U Digital Editions' },
        { href: 'http://schooldesigns.com', label: 'SchoolDesigns.com', target: '_blank' },
        { href: '/resources', label: 'Resources' },
        { href: '/resources/webinars', label: 'Webinars' },
        { href: '/resources/white-papers', label: 'White Papers' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/american-school-and-university', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
