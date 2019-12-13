const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'HYPNnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6075_HLnew', query: { pk: 'NN9WEB' } });

module.exports = config;
