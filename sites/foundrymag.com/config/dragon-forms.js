const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'FMTnewpref' })
  .addForm('magazineSignup', { omedasite: 'FMT_new', query: { pk: 'NNHWEB' } });

module.exports = config;
