/**
 * [term:vocabulary:machine-name]
 *  - The Drupal vocab name. In our case, can be hardcoded to `categories`
 *  - Found on `taxonomy` and `article` locations
 *
 * [term:field_penton_native_advertising:/]
 *  - A flag representing whether the section/taxonomy is sponsored.
 *    If true, `/sponsored/` is added to the path.
 *  - Used on `taxonomy` locations
 *  - Required input: `section.id` (resolution not yet determined)
 *
 * [term:name_lowercase_without_spaces_specialchars]
 *  - The term (with its parents) merged with forward-slashes
 *    Similar to primary category parents join.
 *  - Used on `taxonomy` and `article` locations
 *  - Only used in article `custom_content_channel_sponsored_*` positions
 *  - Required input: `section.id` (will resolve to parents using legacy import data)
 *
 * [current-page:url:path]
 *  - The current page path.
 *  - Found on `commodities` locations
 *  - Required input: `req.path`
 *
 * [node:field_penton_primary_category:parents:join:/]
 *  - The primary category parents merged with forward-slashes
 *  - Used on `gallery` and `article` locations
 *  - Required input: `content.id` (will resolve parents from `content.primarySection` legacy data)
 *
 * [node:field_penton_native_advertising:/]
 *  - A flag representing whether the content is sponsored.
 *    If true, `/sponsored/` is added to the path.
 *  - Used on `gallery` and `article` locations
 *  - Required input: `content.id` (resolution not yet determined)
 *
 * [forums:category_name]
 * - A forum category name?
 * - Used on `forums_topic` and `forums_category` locations
 * - For now, throw Error.
 *
 * [forums:topic_name]
 * - A forum topic name?
 * - Used on `forums_topic` locations
 * - For now, throw Error.
 *
 */
module.exports = (token) => {
  switch (token) {
    case '[term:vocabulary:machine-name]':
      return 'categories';
    default:
      throw new Error(`The dynamic path token ${token} is not supported.`);
  }
};
