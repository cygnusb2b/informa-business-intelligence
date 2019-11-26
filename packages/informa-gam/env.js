const envalid = require('@base-cms/env');

const {
  validators,
  cleanEnv,
} = envalid;
const { nonemptystr } = validators;

module.exports = cleanEnv(process.env, {
  TENANT_KEY: nonemptystr({ desc: 'The website tenant key.' }),
  GAM_SERVICE_URI: nonemptystr({ desc: 'The Informa GAM GraphQL API URI.', default: 'http://gam' }),
});
