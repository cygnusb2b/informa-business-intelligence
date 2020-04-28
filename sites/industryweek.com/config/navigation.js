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
      { href: 'https://manufacturing.endeavorb2b.com/industryweek', label: 'Advertise', target: '_blank' },
      { href: 'https://endeavor.dragonforms.com/loading.do?omedasite=EBM_DoNotSell', label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/covid19', label: 'COVID-19 Crisis' },
        { href: '/talent', label: 'Talent' },
        { href: '/technology-and-iiot', label: 'Technology & IIoT' },
        { href: '/operations', label: 'Operations' },
        { href: '/leadership', label: 'Leadership' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/the-economy', label: 'The Economy' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: 'http://directory.newequipment.com/', label: 'Manufacturing Products' },
        { href: '/resources/industryweek-best-plants-awards', label: 'IndustryWeek Best Plants Awards' },
        { href: '/resources/industryweek-50-best-us-manufacturers', label: 'IW US 50 Best' },
        { href: '/resources/industryweek-us-500', label: 'IW US 500' },
        { href: '/supply-chain-initiative', label: 'Supply Chain Initiative' },
        { href: '/industryweek-at-50', label: 'IndustryWeek at 50' },
        { href: '/resources/iw-best-practices-reports', label: 'IW Best Practices Reports' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/white-papers', label: 'White Papers' },
        { href: 'https://www.mfgtechshow.com/', label: 'Manufacturing & Technology', target: '_blank' },
        { href: 'https://www.safetyleadershipconference.com/', label: 'Safety Leadership Conference', target: '_blank' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://manufacturing.endeavorb2b.com/industryweek', label: 'Advertise', target: '_blank' },
        { href: '/page/industryweek-contributors-guidelines', label: 'Contributors’ Guidelines' },
        { href: 'https://designmanufacturing.informa.com/contentstream/', label: 'Content Licensing' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
