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
      { href: 'https://cv.informa.com/fleet-owner/', label: 'Advertise' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
    ],
  },
  menu: [
    {
      items: [
        { href: '/news', label: 'News' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/safety', label: 'Safety' },
        { href: '/fleet-management', label: 'Fleet Management' },
        { href: '/running-green', label: 'Running Green' },
        { href: '/technology', label: 'Technology' },

      ],
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/resources/white-papers', label: 'White Papers' },
        { href: '/resources/webinars', label: 'Webinars' },
        { href: '/truck-stats', label: 'Truck Statistics' },
        { href: '/page/what-s-my-truck-worth', label: 'Truck Values' },
        { href: '/fleet-owner-magazine', label: 'Fleet Owner Magazine' },
        { href: dragonForms.getFormUrl('magazineSignup'), label: 'Magazine Subscription', target: '_blank' },
        { href: dragonForms.getFormUrl('newsletterSignup'), label: 'eNewlsetter Subscription', target: '_blank' },
        { href: 'http://www.argifocus.com/client/FleetOwner/LM1/lm/rsdefault.asp?elqTrack=true', label: 'Marketing Solutions' },
        { href: 'https://cv.informa.com/fleet-owner/', label: 'Resource Centers' },
        { href: '/resource-center', label: 'Truck Statistics' },
        { href: '/resource-center/driver-management', label: 'Driver Management' },
        { href: '/resource-center/hd-pickup-van', label: 'HD Pickup & Van' },
        { href: '/resource-center/maintenance', label: 'Maintenance' },
        { href: '/resource-center/powertrain', label: 'Powertrain' },
        { href: '/news/regulations', label: 'Regulation' },
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://cv.informa.com/fleet-owner/', label: 'Advertise' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy & Cookie Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms of Service', target: '_blank' },
      ],
    },
  ],
};
