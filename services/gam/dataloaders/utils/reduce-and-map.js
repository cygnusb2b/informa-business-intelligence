module.exports = ({ ids, docs }) => {
  const mapped = docs.reduce((map, doc) => {
    map.set(`${doc._id}`, doc);
    return map;
  }, new Map());
  return ids.map(id => (mapped.get(`${id}`) || null));
};
