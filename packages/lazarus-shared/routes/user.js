const IdentityX = require('@base-cms/marko-web-identity-x');
const IdentityXConfig = require('@base-cms/marko-web-identity-x/config');
const authenticate = require('../templates/user/authenticate');
const login = require('../templates/user/login');
const logout = require('../templates/user/logout');
const register = require('../templates/user/register');

module.exports = (app) => {
  const appId = app.locals.site.get('identityX.appId');
  if (appId) {
    IdentityX(app, new IdentityXConfig(appId));

    app.get('/user/authenticate', (_, res) => { res.marko(authenticate); });
    app.get('/user/login', (_, res) => { res.marko(login); });
    app.get('/user/logout', (_, res) => { res.marko(logout); });
    app.get('/user/register', (_, res) => { res.marko(register); });
  }
};
