const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'NEDnewpref' })
  .addForm('newsletterSignup', { omedasite: 'NEDnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6144_NQland', query: { pk: 'NNHWEB' } });

module.exports = config;
