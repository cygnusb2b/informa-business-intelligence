const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'EHSnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6084_OZnew', query: { pk: 'NNHWEB' } });

module.exports = config;
