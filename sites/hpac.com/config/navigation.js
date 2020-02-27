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
      { href: 'https://buildings.informa.com/hpac', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/heating', label: 'Heating' },
        { href: '/iaq-ventilation', label: 'Ventilation' },
        { href: '/air-conditioning', label: 'Air Conditioning/Cooling' },
        { href: '/building-automation', label: 'Building Automation' },
        { href: '/piping-pumping', label: 'Piping/Pumping' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/adventures-johnny-tundra', label: 'Adventures of Johnny Tundra' },
        { href: '/hpac-digital-editions', label: 'HPAC Engineering Digital Editions' },
        { href: '/directory', label: 'Buyers Guide' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/whitepapers', label: 'White Papers' },
        { href: '/page/hpac-engineering-industry-experts-and-advisors', label: 'Industry Experts and Advisors' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/hpac', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
