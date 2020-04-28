const DragonFormsConfig = require('@endeavor-business-media/lazarus-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('newsletterSubscribe', { omedasite: 'RFTnewpref' })
  .addForm('newsletterSignup', { omedasite: 'RFTnewpref', query: { pk: 'ARTWEB' } });
//   .addForm('magazineSignup', { omedasite: 'PEN6133_ASland', query: { pk: 'NNHWEB' } });

module.exports = config;
