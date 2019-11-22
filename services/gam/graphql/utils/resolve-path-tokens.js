const { UserInputError } = require('apollo-server-express');
const { get } = require('@base-cms/object-path');
const loadSectionHierarchy = require('./load-section-hierarchy');
const cleanPathValue = require('./clean-path-value');

const contextError = type => new UserInputError(`A ${type} context is required to generate the ad unit path`);

const resolvers = {
  /**
   * The DFP/GAM instance ID + site root path.
   * This will be handled by the website and can removed.
   */
  '[dfp_tag:site_id]': () => '',

  /**
   * The Drupal vocab name.
   * Generally this can be hardcoded to `categories`, with the expcetion
   * of the "Program" vocab, which should use `program` instead.
   * Used on `taxonomy` and `article` locations
   */
  '[term:vocabulary:machine-name]': ({ section }) => {
    const def = 'categories';
    const legacyId = get(section, 'legacy.id');
    if (!legacyId) return def;
    if (/^3_/.test(legacyId)) return 'program';
    return def;
  },

  /**
   * @todo This field is not being saved in the legacy data. Must be added.
   * For now, return nothing.
   */
  '[term:field_penton_native_advertising:/]': () => '',

  /**
    * The term (with its parents) merged with forward-slashes
    * Similar to primary category parents join.
    * Used on `taxonomy` and `article` locations
    *
    * @param {object} ctx
    * @param {object} ctx.section The website section context.
    * @param {object} ctx.loaders The dataloaders object.
   */
  '[term:name_lowercase_without_spaces_specialchars]': async ({ section, loaders }) => {
    if (!section) throw contextError('section');
    const loader = loaders('websiteSection');
    const hierarchy = await loadSectionHierarchy(section, loader);
    return hierarchy.map(s => cleanPathValue(s.name)).join('/');
  },
};

module.exports = async (path, ctx) => {
  const tokens = path.match(/\[.*?:.+?\]/g);
  return Promise.all(tokens.map(async (token) => {
    const resolver = resolvers[token];
    if (!resolver) throw new Error(`No path token resolver was found for ${token}`);
    const replacement = await resolver(ctx);
    return { pattern: token, replacement };
  }));
};
