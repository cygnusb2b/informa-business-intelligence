const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
//   .addForm('magazineSignup', { omedasite: 'PEN6133_ASland' })
  .addForm('newsletterSubscribe', { omedasite: 'AMMnewpref' })
  .addForm('newsletterSignup', { omedasite: 'AMMnewpref', query: { pk: 'ARTWEB' } });


module.exports = config;
