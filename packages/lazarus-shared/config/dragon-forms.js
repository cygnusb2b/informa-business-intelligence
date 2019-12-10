const { URL, URLSearchParams } = require('url');

class DragonFormsConfig {
  constructor({ url }) {
    if (!url) throw new Error('The DragonForms URL is required.');
    this.url = (new URL(url)).origin;
    this.forms = {};
  }

  addForm(key, { omedasite, options } = {}) {
    if (!omedasite) throw new Error('The `omedasite` value is required.');
    this.forms[key] = { omedasite, options };
    return this;
  }

  getFormUrl(key) {
    const { omedasite, options } = this.getForm(key);
    if (!omedasite) return null;
    const params = new URLSearchParams({
      ...options,
      omedasite,
    });
    return `${this.getFormAction()}?${params}`;
  }

  getFormAction() {
    return `${this.url}/loading.do`;
  }

  getForm(key) {
    return this.forms[key] || {};
  }
}

module.exports = DragonFormsConfig;
