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
      { href: 'https://buildings.endeavorb2b.com/contracting-business', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/contracting-business-success', label: 'Contracting Business Success' },
        { href: '/residential-hvac', label: 'Residential HVAC' },
        { href: '/commercial-hvac', label: 'Commercial HVAC' },
        { href: '/iaq-ventilation', label: 'IAQ & Ventilation' },
        { href: '/refrigeration', label: 'Refrigeration' },
        { href: '/service', label: 'Service' },
        { href: '/technology', label: 'Technology' },
        { href: '/product-news', label: 'Product News' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/magazine/5e6ba79ba1b8b3c98138e151', label: 'Digital Back Issues' },
        { href: '/hvacrdb', label: 'HVACR Distribution Business' },
        { href: '/nate-digital-editions', label: 'NATE Magazine' },
        { href: '/whitepapers', label: 'White Papers' },
        { href: '/learning-resources/webinars', label: 'Webinars' },
        { href: '/learning-resources/faqs', label: 'FAQs' },
        { href: '/awards', label: 'Awards' },
        { href: 'http://contractingbusiness.hotims.com/r5/search.asp?action=search&return_by_category=y', label: 'Free Advertiser Info', target: '_blank' },
        { href: '/downloads', label: 'Monthly Downloads' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://buildings.endeavorb2b.com/contracting-business', label: 'Advertise', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
