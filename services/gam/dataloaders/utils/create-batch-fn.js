const reduceAndMap = require('./reduce-and-map');

module.exports = ({
  model,
  projection,
  basedb,
  field = '_id',
}) => async (ids) => {
  const docs = await basedb.find(model, { [field]: { $in: ids } }, { projection });
  return reduceAndMap({ ids, docs, field });
};
