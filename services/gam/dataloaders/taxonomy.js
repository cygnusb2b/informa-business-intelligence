const DataLoader = require('dataloader');
const createBatchFn = require('./utils/create-batch-fn');

const projection = {
  name: 1,
  type: 1,
  'legacy.id': 1,
};

module.exports = ({ basedb, field }) => new DataLoader(keys => createBatchFn({
  model: 'platform.Taxonomy',
  projection,
  basedb,
  field,
})(keys));
