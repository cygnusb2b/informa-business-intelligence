const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSignup', { omedasite: 'FOWNNewPref' })
  .addForm('magazineSignup', { omedasite: 'PEN6124_FRnew', query: { pk: 'web2' } });

module.exports = config;
