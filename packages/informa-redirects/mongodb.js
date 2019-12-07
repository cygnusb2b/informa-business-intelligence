const { createMongoClient } = require('@base-cms/db');

const { MONGO_DSN } = process.env;
module.exports = createMongoClient(MONGO_DSN, { useUnifiedTopology: true });
