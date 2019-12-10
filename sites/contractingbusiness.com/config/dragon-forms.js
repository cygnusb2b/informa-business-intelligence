const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com/loading.do' });

config
  .addOmedaSite('newsletterSignup', { omedasite: 'CBnewpref' })
  .addOmedaSite('magazineSignup', { omedasite: 'PEN6056_GBland' });

module.exports = config;
