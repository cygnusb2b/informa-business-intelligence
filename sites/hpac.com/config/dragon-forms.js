const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'HPACnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6057_HRland' });

module.exports = config;
