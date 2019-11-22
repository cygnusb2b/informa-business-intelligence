const reduceAndMap = require('./reduce-and-map');

module.exports = ({ model, projection, basedb }) => async (ids) => {
  const docs = await basedb.find(model, { _id: { $in: ids } }, { projection });
  return reduceAndMap({ ids, docs });
};
