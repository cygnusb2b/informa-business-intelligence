const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com/loading.do' });

config
  .addOmedaSite('newsletterSignup', { omedasite: 'EWnewpref' })
  .addOmedaSite('magazineSignup', { omedasite: 'PEN6111_EWland' });

module.exports = config;
