const DataLoader = require('dataloader');
const createBatchFn = require('./utils/create-batch-fn');

const projection = {
  type: 1,
  taxonomy: 1,
  'mutations.Website.primarySection': 1,
  'legacy.raw.field_penton_native_advertising.und': 1,
  'legacy.raw.field_penton_program.und': 1,
  'legacy.raw.field_penton_article_type.und': 1,
  'legacy.id': 1,
};

module.exports = ({ basedb }) => new DataLoader(keys => createBatchFn({ model: 'platform.Content', projection, basedb })(keys));
