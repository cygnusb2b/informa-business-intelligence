const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'FMSnewpref' })
  .addForm('newsletterSignup', { omedasite: 'FMSPrefPage', query: { pk: 'NLFooter' } })
  .addForm('magazineSignup', { omedasite: 'FMS_new' });

module.exports = config;
