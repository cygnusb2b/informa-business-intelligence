module.exports = async ({ req }) => {
  const { query } = req;
  const tenantKey = req.get('x-tenant-key') || query['tenant-key'];
  const siteId = req.get('x-site-id') || query['site-id'];
  if (!tenantKey || !siteId) throw new Error('A tenant key and site ID are required.');
  return {
    tenantKey,
    siteId,
  };
};
