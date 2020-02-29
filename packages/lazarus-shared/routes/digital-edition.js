const digitalEdition = require('../templates/digital-edition');

module.exports = (app) => {
  app.get('/digital-edition', (_, res) => {
    res.marko(digitalEdition);
  });
};
