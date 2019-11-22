const DataLoader = require('dataloader');
const createBatchFn = require('./utils/create-batch-fn');

const projection = {
  'mutations.Website.primarySection': 1,
  'legacy.raw.field_penton_native_advertising.und': 1,
};

module.exports = ({ basedb }) => new DataLoader(keys => createBatchFn({ model: 'platform.Content', projection, basedb })(keys));
