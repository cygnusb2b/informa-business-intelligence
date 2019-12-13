const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'MWRFnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6085_RFnew', query: { pk: 'NN9WEB' } });

module.exports = config;
