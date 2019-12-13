const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'EWnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6111_EWland' });

module.exports = config;
