const express = require('express');
const bodyParser = require('body-parser');

var middleware = require('../controllers/middleware.js');
var mainCtrl = require('../controllers/mainCtrl.js');

const app = express();

app.use( bodyParser.json() );

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getOccupationsLatest)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesType)
app.get('/family', mainCtrl.getFamily)
const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );