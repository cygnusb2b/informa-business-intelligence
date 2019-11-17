const subscribe = require('@endeavor-business-media/lazarus-shared/templates/subscribe');

module.exports = (app) => {
  app.get('/subscribe', (_, res) => {
    res.marko(subscribe);
  });
};
