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
      { href: 'https://buildings.informa.com/contracting-business/', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/contracting-business-success', label: 'Contracting Business Success' },
        { href: '/residential-hvac', label: 'Residential HVAC' },
        { href: '/commercial-hvac', label: 'Commercial HVAC' },
        { href: '/iaq-ventilation', label: 'IAQ & Ventilation' },
        { href: '/refrigeration', label: 'Refrigeration' },
        { href: '/service', label: 'Service' },
        { href: 'https://www.contractingbusiness.com/technology', label: 'Technology' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/contracting-business-digital-archive', label: 'Contracting Business Digital Edition' },
        { href: '/hvacrdb', label: 'HVACR Distribution Business' },
        { href: '/nate-digital-editions', label: 'NATE Magazine' },
        { href: '/whitepapers', label: 'White Papers' },
        { href: '/learning-resources/webinars', label: 'Webinars' },
        { href: '/learning-resources/faqs', label: 'FAQs' },
        { href: '/awards', label: 'Awards' },
        { href: 'http://contractingbusiness.hotims.com/r5/search.asp?action=search&return_by_category=y', label: 'Free Advertiser Info', target: '_blank' },
        { href: '/downloads', label: 'Monthly Downloads' },
        { href: '/page/contracting-business-industry-experts-and-advisors', label: 'Industry Experts and Advisors' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/contracting-business', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
