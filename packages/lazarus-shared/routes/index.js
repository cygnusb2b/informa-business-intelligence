const loadInquiry = require('@base-cms/marko-web-inquiry');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const search = require('./search');
const subscribe = require('./subscribe');
const digitalEdition = require('./digital-edition');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);

  // Homepage
  home(app);

  // Magazine Pages
  magazine(app);

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
