const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'IDWnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6086_IYnew', query: { pk: 'NNHWEB' } });

module.exports = config;
