const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addOmedaSite('newsletterSignup', { omedasite: 'HPACnewpref' })
  .addOmedaSite('magazineSignup', { omedasite: 'PEN6057_HRland' });

module.exports = config;
