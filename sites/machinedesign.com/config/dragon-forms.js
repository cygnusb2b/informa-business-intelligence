const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'MDZnewpref' })
  .addForm('newsletterSignup', { omedasite: 'MDZnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6095_MNnew', query: { pk: 'NN9WEB' } });

module.exports = config;
