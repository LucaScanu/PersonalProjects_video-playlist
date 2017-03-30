const express       = require('express');
const path          = require('path');

const config        = require('./config/config');

const app           = express();

app.use('/', express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(config.port, () => console.log(`listening on ${config.port}`));
