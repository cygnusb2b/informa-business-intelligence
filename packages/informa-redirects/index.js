require('dotenv').config();
const { createBaseDB } = require('@base-cms/db');
const client = require('./mongodb');
const loadSites = require('./load-sites');

const { MONGO_DSN } = process.env;
const { log } = console;

/**
 * Redirects to upsert. Change this list to adjust which values are upserted.
 */
const redirects = [
  { from: '/about-us', to: '/page/about-us' },
  { from: '/about', to: '/page/about-us' },
  { from: '/contact', to: '/page/contact-us' },
  { from: '/contact-us', to: '/page/contact-us' },
  { from: '/contact', to: '/page/contact-us' },
];

/**
 * Sites to apply the redirects to. An empty array means _ALL_ sites.
 * Should be an array of site service names, e.g. `['asumag.com', 'industryweek.com']`
 */
const sitesToUse = [];

/**
 * Runs the redirect upsert.
 * Ensure the `MONGO_DSN` env value is set to the correct DB before running.
 */
const run = async () => {
  await client.connect();
  log(`MongoDB connected to ${MONGO_DSN}`);
  const sites = loadSites({ filter: sitesToUse });

  await Promise.all(sites.map(async (site) => {
    const bulkOps = redirects.map(({ from, to }) => ({
      updateOne: {
        filter: { from, siteId: site.id },
        update: { $setOnInsert: { from, to, siteId: site.id } },
        upsert: true,
      },
    }));
    const basedb = createBaseDB({ tenant: site.tenant, client });
    const collection = await basedb.collection('website', 'Redirects');

    const legacyIndex = await collection.indexExists('from_1');
    if (legacyIndex) await collection.dropIndex('from_1');
    await collection.bulkWrite(bulkOps);
    log('Redirects written for', site.key);
  }));

  await client.close(true);
  log('DONE!');
};

run().catch(e => setImmediate(() => { throw e; }));
