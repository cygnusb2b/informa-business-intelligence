const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'EMNewPref' })
  .addForm('magazineSignup', { omedasite: 'PEN6149_JEland' });

module.exports = config;
