const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addOmedaSite('newsletterSignup', { omedasite: 'CONTRnewpref' })
  .addOmedaSite('magazineSignup', { omedasite: 'PEN6058_TOland' });

module.exports = config;
