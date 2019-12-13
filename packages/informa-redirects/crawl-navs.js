const cheerio = require('cheerio');
const fetch = require('node-fetch');
const loadSites = require('./load-sites');

const { log } = console;

/**
 * Sites to crawl. An empty array means _ALL_ sites.
 * Should be an array of site service names, e.g. `['asumag.com', 'industryweek.com']`
 */
const sitesToUse = [];

/**
 * Switch to `www` to crawl production sites.
 */
const machineName = 'staging';

const loadMenuItems = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw Error('Bad response.');
  const html = await res.text();
  const $ = cheerio.load(html);
  const items = [];
  $('.site-menu__link').each(function item() {
    items.push({ href: $(this).attr('href'), label: $(this).text() });
  });
  return items;
};

const crawlNavItem = async (url, href) => {
  const isAbsolute = /^http/.test(href);
  const toCrawl = isAbsolute ? href : `${url}${href}`;
  try {
    const res = await fetch(toCrawl, { method: 'head' });
    return res.status;
  } catch (e) {
    return e.code;
  }
};

/**
 * Runs the nav test crawler.
 */
const run = async () => {
  const sites = loadSites({ filter: sitesToUse });
  const urls = sites.map(site => `https://${machineName}.${site.key}`);

  const navItems = await Promise.all(urls.map(async (url) => {
    const items = await loadMenuItems(url);
    return { url, items };
  }));

  const data = await Promise.all(navItems.map(async ({ url, items }) => {
    const results = await Promise.all(items.map(async ({ href, label }) => {
      const status = await crawlNavItem(url, href);
      return { status, label, href };
    }));
    return { url, results };
  }));

  const filtered = data.map(({ url, results }) => ({
    url,
    results: results.filter(r => r.status !== 200 && r.status !== 'ECONNRESET'),
  }));

  log('');
  log(JSON.stringify(filtered, null, 2));
  log('');
};

run().catch(e => setImmediate(() => { throw e; }));
