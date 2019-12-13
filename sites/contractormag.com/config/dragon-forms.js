const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'CONTRnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6058_TOland' });

module.exports = config;
