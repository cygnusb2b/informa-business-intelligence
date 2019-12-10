const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'TWnewpref' })
  .addForm('magazineSignup', { omedasite: 'PEN6138_TWland', query: { pk: 'NN71RA' } });

module.exports = config;
