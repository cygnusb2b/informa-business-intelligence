const { createBaseDB, BaseDB } = require('@base-cms/db');
const mongodb = require('../../mongodb');
const createLoaders = require('../../dataloaders');

const loadDoc = async (id, loader) => {
  if (!id) return undefined;
  const doc = await loader.load(parseInt(id, 10));
  if (!doc) throw new Error(`No GAM context document was found for ID ${id}`);
  return doc;
};

module.exports = async ({ req }) => {
  const { query } = req;
  const tenantKey = req.get('x-tenant-key') || query['tenant-key'];
  if (!tenantKey) throw new Error('A tenant key is required.');

  const basedb = createBaseDB({ tenant: tenantKey, client: mongodb });
  const adunits = await mongodb.collection('informa_gam', 'adunits');
  const loaders = createLoaders({ basedb });

  // eslint-disable-next-line prefer-const
  let [section, content] = await Promise.all([
    loadDoc(req.get('x-section-id'), loaders.websiteSection),
    loadDoc(req.get('x-content-id'), loaders.content),
  ]);

  // Automatically load the section context from the content.
  if (content && !section) {
    const sectionRef = BaseDB.get(content, 'mutations.Website.primarySection');
    const primarySectionId = BaseDB.extractRefId(sectionRef);
    if (primarySectionId) {
      section = await loadDoc(primarySectionId, loaders.websiteSection);
    }
  }

  return {
    tenantKey,
    adunits,
    basedb,
    loaders: (model) => {
      const loader = loaders[model];
      if (!loader) throw new Error(`No dataloader found for '${model}'`);
      return loader;
    },
    requestPath: req.get('x-request-path'),
    section,
    content,
  };
};
