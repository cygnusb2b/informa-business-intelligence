const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'FRGnewpref' })
  .addForm('newsletterSignup', { omedasite: 'FRGnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'FRG_new', query: { pk: 'NNHWEB' } });

module.exports = config;
