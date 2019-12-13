const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'RERnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6139_RQnew', query: { pk: 'RQnew' } });

module.exports = config;
