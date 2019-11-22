const DataLoader = require('dataloader');
const createBatchFn = require('./utils/create-batch-fn');

const projection = {
  name: 1,
};

module.exports = ({ basedb }) => new DataLoader(keys => createBatchFn({ model: 'platform.Taxonomy', projection, basedb })(keys));
