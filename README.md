# BaseCMS Websites for Endeavor Business Media (Former Informa Sites)
This monorepo contains the codebase for websites managed by Endeavor Business Media. All sites within this repository utilize the [@base-cms/base-cms](https://github.com/base-cms/base-cms) packages, most notably the `marko-web` and `web-cli`.

## Site Copy Steps
1. Copy an existing site (e.g. `industryweek`) to the target site folder
2. Update the `package.json` `name` and `repository` fields
3. Update `server/public/robots.txt` to correct domain name
4. Set the color variables in `server/styles/index.scss`
5. Update the favicons found in `server/public` using `favicon.io` with Racing Sans Pro font and the site primary color as the background
6. Set config values found in `config`
  - GAM aliases in `gam.js`
  - Nav items in `navigation.js`
  - Logos, homepage sections, social media links, and newsletter subscribe link
7. Add site to `travis.yml`
8. Add site to `docker-compose.yml`
