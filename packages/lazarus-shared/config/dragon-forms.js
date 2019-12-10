const { URL } = require('url');

class DragonFormsConfig {
  constructor({ url }) {
    if (!url) throw new Error('The DragonForms URL is required.');
    this.url = (new URL(url)).origin;
    this.omedasites = {};
  }

  addOmedaSite({ key, omedasite }) {
    this.omedasites[key] = omedasite;
    return this;
  }

  getFormUrl({ key }) {
    const omedasite = this.getOmedaSite({ key });
    if (!omedasite) return null;
    return `${this.getFormAction()}?omedasite=${omedasite}`;
  }

  getFormAction() {
    return `${this.url}/loading.do`;
  }

  getOmedaSite({ key }) {
    return this.omedasites[key];
  }
}

module.exports = DragonFormsConfig;
