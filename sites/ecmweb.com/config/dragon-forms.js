const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'ECMnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6132_EBland' });

module.exports = config;
