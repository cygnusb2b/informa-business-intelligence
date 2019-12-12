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
      { href: 'http://ebmarketing.penton.com/brands/electrical-marketing/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/industry-stats/electrical-marketing-data-central', label: 'Data Central' },
        { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
        { href: '/electrical-economy', label: 'Electrical Economy' },
        { href: '/hot-topics/people', label: 'People' },
        { href: '/industry-segments/independent-reps', label: 'Rep News' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/current-issue/november-22-2019', label: 'Digital Edition' },
        { href: '/industry-stats/electrical-price-index', label: 'Electrical Price Index' },
        { href: '/hot-topics/metals-markets', label: 'Materials Pricing' },
        { href: '/market-segments/commercial', label: 'Commercial Market' },
        { href: '/market-segments/residential', label: 'Residential Market' },
        { href: '/market-segments/industrial', label: 'Industrial Market' },
        { href: '/market-segments/utility', label: 'Utility Market' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'http://ebmarketing.penton.com/brands/electrical-marketing/', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
