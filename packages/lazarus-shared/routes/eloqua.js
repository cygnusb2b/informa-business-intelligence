const fetch = require('node-fetch');
const asyncRoute = require('@base-cms/utils/src/async-route.js');

module.exports = (app) => {
  app.get('/__eloqua/form/:formId', asyncRoute(async (req, res) => {
    const auth = Buffer.from(`${process.env.ELOQUA_SITE_NAME}\\${process.env.ELOQUA_USER}:${process.env.ELOQUA_PASSWORD}`).toString('base64');
    const data = await fetch(
      `https://secure.p01.eloqua.com/api/REST/2.0/assets/form/${req.params.formId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${auth}`,
        },
      },
    ).then(r => r.json());
    res.json({ html: data.html });
  }));
};
