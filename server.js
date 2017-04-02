const express       = require('express');

const config        = require('./config/config');
// const dest          = `${__dirname}/public`;

const app           = express();

app.use('/', express.static('public'));
app.use('/', express.static('bower_components'));

// app.get('/js/views/video-index.html', (req, res) => res.sendFile(`${__dirname}/public/js/views/video-index.html`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(config.port, () => console.log(`listening on ${config.port}`));
