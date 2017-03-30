const express       = require('express');
// const path          = require('path');

const config        = require('./config/config');
const dest          = `${__dirname}/public`;

const app           = express();

app.use('/', express.static(dest));
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, () => console.log(`listening on ${config.port}`));
