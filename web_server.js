
const cfg_file = require('./config/config.json');
const routes = require('./api/routes/web-routes');
const express = require('express'),
    app = express(),
    port = cfg_file.server.port;

bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/covid19UI`));
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);
console.log(`GUI's available on port ${port}`);
