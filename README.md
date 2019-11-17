# BaseCMS Websites for Endeavor Business Media (Former Informa Sites)
This monorepo contains the codebase for websites managed by Endeavor Business Media. All sites within this repository utilize the [@base-cms/base-cms](https://github.com/base-cms/base-cms) packages, most notably the `marko-web` and `web-cli`.

## Update Generic Sites
1. Set the color variables in `server/styles/index.scss`
2. Update the generic favicons found in `server/public` using `favicon.io` with Racing Sans Pro font and the site primary color as the background
3. Set config values found in the `config` folder. Values that need to be set will be flagged with `<NOT SET>`
    - GAM aliases in `gam.js`
    - Nav items in `navigation.js`
    - Logos, homepage sections, social media links, and newsletter subscribe link
