const { BaseDB } = require('@base-cms/db');

const loadHierarchy = async (section, loader, sections = []) => {
  const ref = BaseDB.get(section, 'parent');
  const parentId = BaseDB.extractRefId(ref);
  if (!parentId) return sections;
  const parent = await loader.load(parentId);
  if (!parent) return sections;
  sections.push(parent);
  return loadHierarchy(parent, loader, sections);
};

module.exports = async (section, loader) => {
  const hierarchy = await loadHierarchy(section, loader, [section]);
  return hierarchy.reverse();
};
