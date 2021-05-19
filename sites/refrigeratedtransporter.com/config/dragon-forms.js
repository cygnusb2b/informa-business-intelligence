const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'RTnewpref' })
  .addForm('newsletterSignup', { omedasite: 'RTnewpref', query: { pk: 'ARTWEB' } })
  .addForm('magazineSignup', { omedasite: 'RT_renew' });

module.exports = config;
