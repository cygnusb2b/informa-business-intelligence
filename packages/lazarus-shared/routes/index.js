const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const subscribe = require('./subscribe');
const digitalEdition = require('./digital-edition');
const websiteSections = require('./website-section');
const user = require('./user');

module.exports = (app) => {
  // User (IdentityX)
  user(app);

  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Subscription Pages
  subscribe(app);

  // Digital Edition Pages
  digitalEdition(app);

  // Website Sections
  websiteSections(app);
};
