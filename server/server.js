const express = require('express');
const bodyParser = require('body-parser');

var middleware = require('../controllers/middleware.js');
var mainCtrl = require('../controllers/mainCtrl.js');

const app = express();

app.use( bodyParser.json() );

app.use(middleware.addHeaders);

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );