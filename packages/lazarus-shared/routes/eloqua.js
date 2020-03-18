const fetch = require('node-fetch');
const asyncRoute = require('@base-cms/utils/src/async-route');

module.exports = (app) => {
  app.get('/__eloqua/form/:formId', asyncRoute(async (req, res) => {
    const auth = Buffer.from(`${process.env.ELOQUA_SITE_NAME}\\${process.env.ELOQUA_USER}:${process.env.ELOQUA_PASSWORD}`).toString('base64');
    const response = await fetch(
      `https://secure.p01.eloqua.com/api/REST/2.0/assets/form/${req.params.formId}`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Basic ${auth}`,
        },
      },
    );
    const json = await response.json();
    res.json({ html: json.html });
  }));
};
