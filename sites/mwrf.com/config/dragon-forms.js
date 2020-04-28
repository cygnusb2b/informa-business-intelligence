const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'MWRFnewpref' })
  .addForm('newsletterSignup', { omedasite: 'MWRFnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6085_RFnew', query: { pk: 'NN9WEB' } });

module.exports = config;
