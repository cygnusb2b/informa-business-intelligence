const IdentityX = require('@base-cms/marko-web-identity-x');
const IdentityXConfig = require('@base-cms/marko-web-identity-x/config');
const authenticate = require('../templates/user/authenticate');
const login = require('../templates/user/login');
const logout = require('../templates/user/logout');
const register = require('../templates/user/register');

const { isArray } = Array;
const navConfig = [
  { href: '/user/login', label: 'Log In', when: 'logged-out' },
  { href: '/user/logout', label: 'Log Out', when: 'logged-in' },
  { href: '/user/register', label: 'Register', when: 'logged-out' },
];

module.exports = (app) => {
  const { site } = app.locals;
  const { appId, enabled } = site.getAsObject('identityX');
  if (appId && enabled) {
    IdentityX(app, new IdentityXConfig(appId));

    const navItems = site.get('navigation.tertiary.items');
    if (isArray(navItems)) navItems.unshift(...navConfig);

    app.get('/user/authenticate', (_, res) => { res.marko(authenticate); });
    app.get('/user/login', (_, res) => { res.marko(login); });
    app.get('/user/logout', (_, res) => { res.marko(logout); });
    app.get('/user/register', (_, res) => { res.marko(register); });
  }
};
