const navigation = require('./navigation');
const dragonForms = require('./dragon-forms');

module.exports = {
  company: 'Endeavor Business Media, LLC',
  navigation,
  dragonForms,
  identityX: {
    enabled: false,
    appId: '5df0e8dc05aa5681de43fc36',
  },
  homePageSections: [
    { alias: '/technologies/cylinders-actuators', name: 'Cylinders & Actuators' },
    { alias: 'technologies/hydraulic-valves', name: 'Hydraulic Valves' },
    { alias: 'technologies/hydraulic-pumps-motors', name: 'Hydraulic Pumps & Motors' },
  ],
  logos: {
    navbar: {
      src: 'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=30',
      srcset: [
        'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=45',
      srcset: [
        'https://img.hydraulicspneumatics.com/files/base/ebm/hydraulicspneumatics/image/static/hydraulicspneumatics-logo.png?h=90 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/HydraulicsPneumatics', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/HPpenton', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/40236/profile', target: '_blank' },
  ],
  gam: { accountId: '3834', basePath: 'hnp.home' },
  gtm: {
    containerId: 'GTM-NNFQ6CV',
  },
  gcse: {
    id: '003355913687346718228:soieatw5ooh',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  newsletterSubscribeLink: dragonForms.getFormUrl('newsletterSignup'),
};
