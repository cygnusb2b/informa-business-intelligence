const { UserInputError } = require('apollo-server-express');
const { BaseDB } = require('@base-cms/db');
const { get } = require('@base-cms/object-path');
const loadSectionHierarchy = require('./load-section-hierarchy');
const cleanPathValue = require('./clean-path-value');

const PROGRAM_VOCAB_ID = 3;
const PROGRAM_SECTION_ALIAS = 'program';

const contextError = type => new UserInputError(`A ${type} context is required to generate the ad unit path`);

const loadPrimarySection = async ({ content, loaders }) => {
  if (!content) throw contextError('content');
  const ref = BaseDB.get(content, 'mutations.Website.primarySection');
  const primarySectionId = BaseDB.extractRefId(ref);
  if (!primarySectionId) return null;
  return loaders('websiteSection').load(primarySectionId);
};

const loadPrimaryTerm = async ({ content, loaders }) => {
  const section = await loadPrimarySection({ content, loaders });
  if (!section || section.alias === 'home') return '';
  return cleanPathValue(section.name);
};

/**
 * Determines if a website section alias is a program.
 */
const hasProgramAlias = alias => (alias && alias.indexOf(`${PROGRAM_SECTION_ALIAS}/`) === 0);

/**
 * Extracts a "program" name from a website section.
 */
const sectionProgramName = ({ section }) => {
  const legacyId = get(section, 'legacy.id');
  // When legacy ID is _not_ set, only return when section alias is a program
  if (!legacyId && hasProgramAlias(section.alias)) return cleanPathValue(section.name);
  // When legacy ID is set, only return when the source vocab was "program" (vocab id 3).
  if (legacyId && /^3_/.test(legacyId)) return cleanPathValue(section.name);
  // Do nothing.
  return '';
};

/**
 * Extracts a "program" name from a content item.
 * @todo Look at all scheduled sections and return the first section that has a program.
 */
const contentProgramName = async ({ content, loaders }) => {
  const v = get(content, 'legacy.raw.field_penton_program.und.0.tid');
  if (v) {
    // Has a legacy program id. Lookup taxonomy and return name if found.
    const legacyId = `${PROGRAM_VOCAB_ID}_${v}`;
    const taxonomy = await loaders('legacyTaxonomy').load(legacyId);
    if (taxonomy) return cleanPathValue(taxonomy.name);
  }
  // Attempt to load program name off the primary section.
  const primarySection = await loadPrimarySection({ content, loaders });
  if (primarySection) {
    // If primary section is found, return the program name when found.
    const primaryProgramName = sectionProgramName({ section: primarySection });
    if (primaryProgramName) return primaryProgramName;
  }
  // @todo Look at all scheduled sections and return the first section that has a program.
  return '';
};

/**
 * Extracts a "program" name from either a content or a website section content.
 * If both are provided, the content context takes priority.
 */
const loadProgramName = async ({ content, section, loaders }) => {
  if (!section && !content) throw contextError('section or content');
  let programName;
  if (content) {
    programName = await contentProgramName({ content, loaders });
  } else {
    programName = sectionProgramName({ section });
  }
  return programName;
};

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
   * Used on `taxonomy` and `article` locations.
   *
   * Both a path and a targeting token.
   */
  '[term:vocabulary:machine-name]': async ({ section, content, loaders }) => {
    const programName = await loadProgramName({ content, section, loaders });
    // If a program name was found, set as the `program` vocab.
    if (programName) return 'program';
    // Otherwise use the generic `categories` vocab name.
    return 'categories';
  },

  /**
   * @todo This field is not being saved in the legacy data. Must be added.
   * For now, return nothing.
   *
   * Path token.
   */
  '[term:field_penton_native_advertising:/]': () => '',

  /**
    * The term (with its parents) merged with forward-slashes
    * Similar to primary category parents join.
    * Used on `taxonomy` and `article` locations
    *
    * Path token.
    *
    * Override with the program name, if present.
    *
    * @param {object} ctx
    * @param {object} ctx.section The website section context.
    * @param {object} ctx.loaders The dataloaders object.
   */
  '[term:name_lowercase_without_spaces_specialchars]': async ({ section, content, loaders }) => {
    const programName = await loadProgramName({ content, section, loaders });
    if (programName) return programName;

    if (!section) throw contextError('section');
    // Return nothing when section is home.
    if (section.alias === 'home') return '';
    const loader = loaders('websiteSection');
    const hierarchy = await loadSectionHierarchy(section, loader);
    return hierarchy.map(s => cleanPathValue(s.name)).join('/');
  },

  /**
   * Used on `taxonomy` locations.
   * Targeting token only.
   */
  '[term:category_name_without_space_specialchars]': async ({ section }) => {
    const legacyId = get(section, 'legacy.id');
    // When legacy ID is _not_ set, return the name as-is.
    if (!legacyId) return cleanPathValue(section.name);
    // When legacy ID is set, only return when the source vocab was "categories" (vocab id 2).
    if (legacyId && /^2_/.test(legacyId)) return cleanPathValue(section.name);
    return '';
  },

  /**
   * Used on `taxonomy` locations.
   * Targeting token only.
   */
  '[term:program_name_without_space_specialchars]': ({ section }) => sectionProgramName({ section }),

  /**
   * Found on `gallery`, `page` and `article` locations.
   * Targeting token only.
   */
  '[node:nid]': ({ content }) => {
    const legacyId = get(content, 'legacy.id');
    if (legacyId) return legacyId;
    return `${content._id}`;
  },

  /**
   * Found on `article` locations.
   * Targeting token only.
   */
  '[node:field_penton_article_type]': ({ content }) => {
    const { type } = content;
    const map = {
      Article: 'Article',
      MediaGallery: 'Gallery',
      Video: 'Video',
      Podcast: 'Audio',
      Webinar: 'Webinar',
      Whitepaper: 'White Paper',
      Promotion: 'Link',
      TextAd: 'Link',
    };
    return map[type] || 'Article';
  },

  /**
   * Found on `article` and `gallery` locations.
   * Targeting token only.
   */
  '[node:pterm_without_space_specialchars]': loadPrimaryTerm,

  /**
   * Found on `article` and `gallery` locations
   * Targeting token only.
   */
  '[node:sterm_without_space_specialchars]': async ({ content, loaders }) => {
    const taxonomyIds = BaseDB.extractRefIds(content.taxonomy);
    if (!taxonomyIds.length) return '';
    const [primaryTerm, taxonomies] = await Promise.all([
      loadPrimaryTerm({ content, loaders }),
      loaders('taxonomy').loadMany(taxonomyIds),
    ]);
    const terms = taxonomies.filter((t) => {
      // Do not allow non-categories.
      if (t.type !== 'Category') return false;
      const legacyId = get(t, 'legacy.id');
      // If new category (e.g. does _not_ have a legacy ID), allow.
      if (!legacyId) return true;
      // Only allow "normal" category vocab terms.
      return /^2_/.test(legacyId);
    }).map(t => cleanPathValue(t.name)).filter(v => v !== primaryTerm);
    return terms.join(',');
  },

  /**
   * Found on `article` and `gallery` locations.
   * Targeting token only.
   */
  '[node:author_without_space_specialchars]': async ({ content, loaders }) => {
    const authorId = get(content, 'authors.0');
    if (!authorId) return '';
    const author = await loaders('content').load(authorId);
    if (!author || !author.name) return '';
    return cleanPathValue(author.name);
  },

  /**
   * Found on `article` and `gallery` locations.
   * Targeting token only.
   */
  '[node:program_without_space_specialchars]': async ({ content, loaders }) => contentProgramName({ content, loaders }),

  /**
   * A flag representing whether the content is sponsored.
   * If true, `sponsored/` is added to the path.
   * Used on `gallery` and `article` locations
   *
   * Path token.
   *
   * If content is in a program, do not use this.
   * See L1123 of `penton_custom_dfp.module.php`.
   *
   * @todo Enable the sponsored label once the data is fixed.
   */
  '[node:field_penton_native_advertising:/]': async ({ content, loaders }) => {
    if (!content) throw contextError('content');

    // Prevent using the sponsored flag when content has a program name.
    const programName = await contentProgramName({ content, loaders });
    if (programName) return '';

    const sponsored = 'sponsored/';
    const v = get(content, 'legacy.raw.field_penton_native_advertising.und.0.value');
    if (v === '1') return sponsored;
    // if (getAsArray(content, 'labels').includes('Sponsored')) return sponsored;
    return '';
  },

  /**
   * The content primary category parents merged with forward-slashes
   * Used on `gallery` and `article` locations.
   *
   * Path token.
   *
   * If the content item is also in a program, override the "normal" path with the program name.
   * See L1123 of `penton_custom_dfp.module.php`.
   */
  '[node:field_penton_primary_category:parents:join:/]': async ({ content, loaders }) => {
    if (!content) throw contextError('content');

    // Always use the content program name, when available.
    const programName = await contentProgramName({ content, loaders });
    if (programName) return programName;

    // Otherwise, load the primary section hierarchy and return.
    const primarySection = await loadPrimarySection({ content, loaders });
    // Return nothing when no section is found, or the section is home.
    if (!primarySection || primarySection.alias === 'home') return '';
    // Return the joined section hierarchy.
    const hierarchy = await loadSectionHierarchy(primarySection, loaders('websiteSection'));
    return hierarchy.map(s => cleanPathValue(s.name)).join('/');
  },

  /**
   * The current page path.
   * Found on `commodities` locations
   *
   * Path token.
   */
  '[current-page:url:path]': ({ requestPath }) => {
    if (!requestPath) throw contextError('request path');
    return requestPath.split('/').map(part => cleanPathValue(part)).join('/');
  },

  /**
   * Found on `user` and `author` locations.
   * Targeting token only.
   */
  '[user:full_username_depend_of_profile_page]': () => '',

  /**
   * A forum category name?
   * Used on `forums_topic` and `forums_category` locations
   *
   * Path token.
   */
  '[forums:category_name]': () => { throw new Error('the forums:category_name token is not yet implemented.'); },

  /**
   * A forum topic name?
   * Used on `forums_topic` locations
   *
   * Path token.
   */
  '[forums:topic_name]': () => { throw new Error('the forums:topic_name token is not yet implemented.'); },
};

module.exports = async (tokens, ctx) => Promise.all(tokens.map(async (token) => {
  const resolver = resolvers[token];
  if (!resolver) throw new Error(`No path token resolver was found for ${token}`);
  const replacement = await resolver(ctx);
  return { pattern: token, replacement };
}));
