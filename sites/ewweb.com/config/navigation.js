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
      { href: 'https://buildings.informa.com/electrical-wholesaling/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/news', label: 'News' },
        { href: '/business-management', label: 'Business Management' },
        { href: '/electrical-economy', label: 'Electrical Economy' },
        { href: '/data-training', label: 'Training' },
        { href: '/data-training/top-200', label: 'Top 200' },
        { href: '/data-training/market-planning-guide', label: 'Market Planning Guide' },
        { href: '/green-market/lighting', label: 'Lighting & Controls' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'https://electricalmarketing.com/industry-stats/electrical-price-index', label: 'Electrical Price Index', target: '_blank' },
        { href: '/electrical-wholesaling-digital-editions', label: 'Electrical Wholesaling Digital Editions' },
        { href: 'https://www.electricalmarketing.com/current-issue', label: 'Electrical Marketing Digital Edition', target: '_blank' },
        { href: 'https://penton.sub-forms.com/PEN6149_JEland', label: 'Electrical Market Subscription', target: '_blank' },
        { href: '/industry-perspectives', label: 'Industry Perspectives' },
        { href: '/page/electrical-wholesaling-authors-and-contributors', label: 'Industry Experts and Advisors' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.informa.com/electrical-wholesaling/', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
