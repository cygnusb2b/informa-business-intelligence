/* eslint-disable no-underscore-dangle */
const client = require('./src/mongodb');
const loadSites = require('./src/load-sites');

const { log } = console;

const buildStage = ({ site }) => `
- stage: deploy
  name: ${site.name}
  script: deploy/index.js ${site.service} gemenon
  install: skip
`;

const run = async () => {
  await client.connect();

  const sites = await loadSites();
  const lines = [];

  sites.forEach((site) => {
    lines.push(buildStage({ site }));
  });

  const yml = lines.join('');
  log(yml);

  await client.close();
};

run().catch(e => setImmediate(() => { throw e; }));
