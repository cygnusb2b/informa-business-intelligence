const { createBaseDB } = require('@base-cms/db');
const mongodb = require('../../mongodb');

module.exports = async ({ req }) => {
  const { query } = req;
  const tenantKey = req.get('x-tenant-key') || query['tenant-key'];
  const siteId = req.get('x-site-id') || query['site-id'];
  if (!tenantKey || !siteId) throw new Error('A tenant key and site ID are required.');

  const basedb = createBaseDB({ tenant: tenantKey, client: mongodb });
  const adunits = await mongodb.collection('informa_gam', 'adunits');

  return {
    tenantKey,
    siteId,
    adunits,
    basedb,
  };
};
