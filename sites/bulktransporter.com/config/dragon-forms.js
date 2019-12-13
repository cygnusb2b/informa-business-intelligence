const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'BKTnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6126_MDland', query: { pk: 'NNHWEB' } });

module.exports = config;
