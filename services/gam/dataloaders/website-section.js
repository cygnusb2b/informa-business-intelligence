const DataLoader = require('dataloader');
const createBatchFn = require('./utils/create-batch-fn');

const projection = {
  name: 1,
  alias: 1,
  'parent.$id': 1,
  'legacy.id': 1,
};

module.exports = ({ basedb }) => new DataLoader(keys => createBatchFn({ model: 'website.Section', projection, basedb })(keys));
