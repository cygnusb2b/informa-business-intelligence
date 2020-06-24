# EBM Leadership Package

See [marko-web-leaders package](https://github.com/base-cms/base-cms/blob/master/packages/marko-web-leaders/README.md) for generic installation concerns. Below is the implementation needed for sites within this repository.

## Installation
- Import `@endeavor-business-media/package-leaders` into your site's `package.json` file.

- Copy (& optionally customize) the leadership landing page:
  - `cp ../../packages/leaders/templates/index.marko server/templates/website-section/leaders.marko`
- Create routing for the leadership index page:
```js
// server/routes/website-section.js
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('../templates/website-section/leaders');
// ...

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  // ...
```
- Include the leadership components on the home, section, or content pages:
  - `<leaders-all>`, `<leaders-contextual>`

## Configuration

The leadership package can be customized with site configuration, and certain styles can be overridden with SCSS variables.

### Site Configs
- `leaders.alias`: The section alias that should be used as the root of leadership sections (e.g; `leaders/2020`).
- `leaders.header.imgSrc`: The header image to use for the leadership program
- `leaders.title`: The stylized title of the leadership program on your site (e.g; Leadershin in Security).

### SCSS

View all available [scss variables here](https://github.com/base-cms/base-cms/blob/master/packages/leaders-program/src/scss/_variables.scss)
