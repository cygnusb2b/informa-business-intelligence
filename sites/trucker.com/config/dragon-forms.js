const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'AMTKnewpref' })
  .addForm('newsletterSignup', { omedasite: 'AMTKnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6465_TRnew', query: { pk: 'NNHWEB' } });

module.exports = config;
