const dragonForms = require('./dragon-forms');

module.exports = {
  tertiary: {
    items: [
      { href: '/user/login', label: 'Log In', when: 'logged-out' },
      { href: '/user/logout', label: 'Log Out', when: 'logged-in' },
      { href: '/user/register', label: 'Register', when: 'logged-out' },
      { href: '/search', label: 'Search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://buildings.informa.com/rental-equipment-register/', label: 'Advertise', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
        { href: '/news-analysis', label: 'News & Analysis' },
        { href: '/business-technology', label: 'Business & Technology' },
        { href: '/aeriallifting', label: 'Aerial/Lifting' },
        { href: '/compaction-concrete', label: 'Compaction & Concrete' },
        { href: '/power-generation', label: 'Power Generation' },
        { href: '/earthmoving', label: 'Earthmoving' },
        { href: '/tools', label: 'Tools' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/webinar', label: 'Webinars' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: 'https://buildings.informa.com/rental-equipment-register/', label: 'Advertise', target: '_blank' },
        { href: '/classifieds', label: 'Jobs' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: 'http://directory.rermag.com/Main/DirectoryHome.aspx', label: 'Buyers Guide', target: '_blank' },
        { href: '/associations', label: 'Associations' },
        { href: 'https://www.argifocus.com/client/RentalEquipmentRegister/LM1/lm/rsdefault.asp', label: 'Free Product Info', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
        { href: 'http://www.penton.com/privacy-policy#ThirdPartyAdvertisingTech', label: 'Ad Choices', target: '_blank' },
      ],
    },
  ],
};
