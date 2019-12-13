const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'FRGnewpref' })
  .addForm('magazineSignup', { omedasite: 'FRG_new', query: { pk: 'NNHWEB' } });

module.exports = config;
