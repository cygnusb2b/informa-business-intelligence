const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'CBnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6056_GBland' });

module.exports = config;
