/**
 * [term:program_name_without_space_specialchars]
 *  - Found on `taxonomy` locations
 *  - Required input: `section.id`
 *
 * [term:category_name_without_space_specialchars]
 *  - Found on `taxonomy` locations
 *  - Required input: `section.id`
 *
 * [node:nid]
 *  - Found on `gallery`, `page` and `article` locations
 *  - Required input: `content.id`
 *
 * [node:field_penton_article_type]
 *  - Found on `article` locations
 *  - Required input: `content.id`
 *
 * [node:sterm_without_space_specialchars]
 *  - Found on `article` and `gallery` locations
 *  - Required input: `content.id`
 *
 * [node:program_without_space_specialchars]
 *  - Found on `article` and `gallery` locations
 *  - Required input: `content.id`
 *
 * [node:author_without_space_specialchars]
 *  - Found on `article` and `gallery` locations
 *  - Required input: `content.id`
 *
 * [node:pterm_without_space_specialchars]
 *  - Found on `article` and `gallery` locations
 *  - Required input: `content.id`
 *
 * [term:vocabulary:machine-name]
 *  - Found on `taxonomy` locations
 *  - Will be hardcoded to return `categories` (maybe?)
 *
 * [user:full_username_depend_of_profile_page]
 *  - Found on `user` and `author` locations
 *  - Will return nothing for now
 */
module.exports = () => {};
