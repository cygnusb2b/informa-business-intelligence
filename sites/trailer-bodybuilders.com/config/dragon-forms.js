const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'TBBnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6127_TBland' });

module.exports = config;
