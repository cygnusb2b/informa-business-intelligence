/* eslint-disable no-underscore-dangle */
const client = require('./mongodb');

const loadTenants = async () => {
  const admin = await client.admin();
  const { databases } = await admin.listDatabases();
  const pattern = /_platform$/;
  return databases.filter(db => pattern.test(db.name)).map(db => db.name.replace(pattern, ''));
};

const loadSitesFor = async ({ tenant }) => {
  const coll = await client.collection(`${tenant}_platform`, 'Product');
  const projection = { name: 1, host: 1 };
  const sites = await coll.find({ type: 'Site' }, { projection });
  return sites.toArray();
};

module.exports = async () => {
  const tenants = await loadTenants();
  const tenantSites = await Promise.all(tenants.map(async (tenant) => {
    const sites = await loadSitesFor({ tenant });
    sites.forEach((site) => {
      if (!site.host) throw new Error(`No site host value was found for ${tenant} ${site._id}`);
    });
    return { tenant, sites };
  }));

  return tenantSites.reduce((arr, { tenant, sites }) => {
    sites.forEach((site) => {
      arr.push({
        tenant,
        service: site.host.replace(/^www\./, '').replace(/\.com$|\.net$|\.org$/, ''),
        ...site,
      });
    });
    return arr;
  }, []).sort((a, b) => {
    if (a.service > b.service) return 1;
    if (a.service < b.service) return -1;
    return 0;
  });
};
