const IdentityX = require('@base-cms/marko-web-identity-x');
const IdentityXConfig = require('@base-cms/marko-web-identity-x/config');
const { getAsObject, get } = require('@base-cms/object-path');
const authenticate = require('./templates/user/authenticate');
const login = require('./templates/user/login');
const logout = require('./templates/user/logout');
const profile = require('./templates/user/profile');
const register = require('./templates/user/register');

const { isArray } = Array;

module.exports = (app, startOptions) => {
  const { appId, enabled, options } = getAsObject(startOptions, 'siteConfig.identityX');
  if (appId && enabled) {
    const config = new IdentityXConfig({
      requiredServerFields: ['givenName', 'familyName', 'countryCode'],
      requiredClientFields: ['regionCode', 'countryCode'],
      ...options,
      appId,
    });
    IdentityX(app, config);

    const navConfig = [
      { href: config.getEndpointFor('login'), label: 'Log In', when: 'logged-out' },
      { href: config.getEndpointFor('profile'), label: 'My Profile', when: 'logged-in' },
      { href: config.getEndpointFor('logout'), label: 'Log Out', when: 'logged-in' },
      { href: config.getEndpointFor('register'), label: 'Register', when: 'logged-out' },
    ];

    const navItems = get(startOptions, 'siteConfig.navigation.tertiary.items');
    if (isArray(navItems)) navItems.unshift(...navConfig);

    app.get(config.getEndpointFor('authenticate'), (_, res) => { res.marko(authenticate); });
    app.get(config.getEndpointFor('login'), (_, res) => { res.marko(login); });
    app.get(config.getEndpointFor('logout'), (_, res) => { res.marko(logout); });
    app.get(config.getEndpointFor('register'), (_, res) => { res.marko(register); });
    app.get(config.getEndpointFor('profile'), (_, res) => { res.marko(profile); });
  }
};
