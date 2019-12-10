const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com/loading.do' });

config
  .addOmedaSite('newsletterSignup', { omedasite: 'TWnewpref' })
  .addOmedaSite('magazineSignup', { omedasite: 'PEN6138_TWland', query: { pk: 'NN71RA' } });

module.exports = config;
