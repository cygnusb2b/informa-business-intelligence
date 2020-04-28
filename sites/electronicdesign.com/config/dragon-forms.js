const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'EDZnewpref' })
  .addForm('newsletterSignup', { omedasite: 'EDZnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'PEN6062_egnew', query: { pk: 'ED9WEB' } });

module.exports = config;
