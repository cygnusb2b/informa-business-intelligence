const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'BKTnewpref' })
  .addForm('newsletterSignup', { omedasite: 'BKTnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6126_MDland', query: { pk: 'NNHWEB' } });

module.exports = config;
