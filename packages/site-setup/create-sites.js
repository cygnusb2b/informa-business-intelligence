const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const client = require('./src/mongodb');
const loadSites = require('./src/load-sites');

const { log } = console;

const buildPackage = ({ site }) => `
{
  "name": "@endeavor-business-media/${site.service}",
  "version": "1.0.0-alpha.1",
  "author": "Jacob Bare <jacob@limit0.io>",
  "repository": "https://github.com/base-cms-websites/informa-business-intelligence/tree/master/sites/${site.service}",
  "license": "MIT",
  "private": true,
  "scripts": {
    "dev": "basecms-website dev index.js",
    "build": "basecms-website build",
    "compile": "basecms-marko-compile compile --dir ./ --silent true",
    "lint": "yarn lint:js && yarn lint:css",
    "lint:js": "eslint --ext .js --ext .vue --max-warnings 5 --ignore-path ../../.eslintignore ./",
    "lint:css": "stylelint ./**/*.scss --max-warnings 5",
    "test": "yarn lint && yarn compile && yarn build"
  },
  "dependencies": {
    "@base-cms/marko-core": "^1.0.0-rc.8",
    "@base-cms/marko-web": "^1.0.0-rc.8",
    "@base-cms/marko-web-gam": "^1.0.0-rc.8",
    "@base-cms/marko-web-gtm": "^1.0.0-rc.1",
    "@base-cms/marko-web-icons": "^1.0.0-rc.1",
    "@base-cms/marko-web-reveal-ad": "^1.0.0-rc.1",
    "@base-cms/marko-web-theme-default": "^1.0.0-rc.8",
    "@base-cms/object-path": "^1.0.0-rc.1",
    "@base-cms/utils": "^1.0.0-rc.1",
    "@base-cms/web-cli": "^1.0.0-rc.8",
    "@endeavor-business-media/lazarus-shared": "^1.0.0-alpha.1",
    "graphql": "^14.5.4",
    "graphql-tag": "^2.10.1",
    "newrelic": "^5.11.0"
  }
}
`;

const buildRobots = ({ site }) => `
# www.robotstxt.org/
# www.google.com/support/webmasters/bin/answer.py?hl=en&answer=156449

User-agent: *
Disallow: /
Disallow: /__load-more

Sitemap: https://${site.host}/sitemap.xml
Sitemap: https://${site.host}/sitemap-google-news.xml
`;

const run = async () => {
  await client.connect();

  const sites = await loadSites();

  sites.forEach((site, index) => {
    if (index !== 0) return null;
    const folder = path.resolve('../../sites', site.service);
    log(`Creating ${folder}...`);
    if (fs.existsSync(folder)) {
      log('Already exists. Skipping.');
      return null;
    }
    fs.mkdirSync(folder);
    fse.copySync(path.resolve('./template'), folder);

    const pkg = buildPackage({ site });
    fs.writeFile(`${folder}/package.json`, pkg, (err) => {
      if (err) throw err;
    });

    const robots = buildRobots({ site });
    fs.writeFile(`${folder}/server/public/robots.txt`, robots, (err) => {
      if (err) throw err;
    });
    log('CREATED!');
    return null;
  });

  await client.close();
};

run().catch(e => setImmediate(() => { throw e; }));
