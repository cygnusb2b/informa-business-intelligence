const { get } = require('@base-cms/object-path');

module.exports = ({ ids, docs, field = '_id' }) => {
  const mapped = docs.reduce((map, doc) => {
    const id = get(doc, field);
    map.set(`${id}`, doc);
    return map;
  }, new Map());
  return ids.map(id => (mapped.get(`${id}`) || null));
};
