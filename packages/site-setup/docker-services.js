/* eslint-disable no-underscore-dangle */
const client = require('./src/mongodb');
const loadSites = require('./src/load-sites');

const { log } = console;

const buildService = ({ site, ports }) => `
  ${site.service}:
    <<: *node
    <<: *site-cmd
    working_dir: /root/sites/${site.service}
    environment:
      <<: *env
      <<: *env-gemenon
      PORT: 80
      EXPOSED_PORT: ${ports[0]}
      LIVERELOAD_PORT: ${ports[1]}
      TENANT_KEY: ${site.tenant}
      SITE_ID: ${site._id}
    ports:
      - "${ports[0]}:80"
      - "${ports[1]}:${ports[1]}"
`;

const run = async () => {
  await client.connect();

  const sites = await loadSites();
  const lines = [];

  let port = 5710;
  let reloadPort = 47100;
  sites.forEach((site) => {
    const ports = [port, reloadPort];
    lines.push(buildService({ site, ports }));
    port += 1;
    reloadPort += 1;
  });

  const yml = lines.join('');
  log(yml);

  await client.close();
};

run().catch(e => setImmediate(() => { throw e; }));
