const IdentityX = require('@base-cms/marko-web-identity-x');
const IdentityXConfig = require('@base-cms/marko-web-identity-x/config');
const login = require('../templates/user/login');

module.exports = (app) => {
  const appId = app.locals.site.get('identityX.appId');
  if (appId) {
    IdentityX(app, new IdentityXConfig(appId));

    app.get('/user/login', (_, res) => { res.marko(login); });
  }
};
