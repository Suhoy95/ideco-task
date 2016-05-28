'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var city = require('./handlers/city');
var state = require('./handlers/state');
// var airline = require('./handlers/airline');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use('/api/city', city);
app.use('/api/state', state);
//app.use('/api/airline', airline);


app.use(function(req, res) {
    res.sendStatus(404);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Server started: http://localhost:' + port + '/');
});