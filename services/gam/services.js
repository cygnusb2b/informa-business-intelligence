const mongodb = require('./mongodb');

const { log } = console;

const start = (name, promise, url) => {
  log(`> Connecting to ${name}...`);
  return promise.then((r) => {
    const u = typeof url === 'function' ? url(r) : url;
    log(`> ${name} connected ${u ? `(${u})` : ''}`);
    return r;
  });
};

const stop = (name, promise) => {
  log(`> Disconnecting from ${name}...`);
  return promise.then((r) => {
    log(`> ${name} disconnected`);
    return r;
  });
};

const ping = (name, promise) => promise.then(() => `${name} pinged successfully.`);

module.exports = {
  start: () => Promise.all([
    start('BaseDB', mongodb.connect(), c => c.s.url),
  ]),
  stop: () => Promise.all([
    stop('BaseDB', mongodb.close()),
  ]),
  ping: () => Promise.all([
    ping('BaseDB', mongodb.command({ ping: 1 })),
  ]),
};
