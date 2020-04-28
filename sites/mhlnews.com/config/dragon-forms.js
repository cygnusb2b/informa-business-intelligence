const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'MHLnewpref' })
  .addForm('newsletterSignup', { omedasite: 'MHLnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6133_ASland' });

module.exports = config;
