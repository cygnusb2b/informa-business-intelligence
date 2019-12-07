const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');
const { getAsObject } = require('@base-cms/object-path');
const { MongoDB } = require('@base-cms/db');

const { ObjectID } = MongoDB;

const shouldLoad = (key, filter = []) => {
  if (!filter.length) return true;
  return filter.includes(key);
};

module.exports = ({ filter = [] } = {}) => {
  const dir = path.resolve(__dirname, '../../');
  const file = fs.readFileSync(`${dir}/docker-compose.yml`, 'utf-8');
  const doc = yaml.safeLoad(file);
  const services = getAsObject(doc, 'services');

  return Object.keys(services).reduce((arr, key) => {
    const service = services[key];
    const environment = getAsObject(service, 'environment');
    const { TENANT_KEY, SITE_ID } = environment;
    if (TENANT_KEY && SITE_ID && shouldLoad(key, filter)) {
      arr.push({ key, tenant: TENANT_KEY, id: ObjectID(SITE_ID) });
    }
    return arr;
  }, []);
};
