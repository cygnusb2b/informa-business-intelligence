const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'FMSPrefPage' })
  .addForm('newsletterSignup', { omedasite: 'FMSnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'FMS_new' });

module.exports = config;
