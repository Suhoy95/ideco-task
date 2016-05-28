'use strict';

var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();

var CITIES_FILE = './database/cities.json';

router.get('/', function(req, res, next) {
    fs.readFile(CITIES_FILE, fileHasRead);

    function fileHasRead(err, data) {
        if(err){
            next(err);
            return;
        }

        res.json(JSON.parse(data));
    }
});

router.post('/', function(req, res, next) {
    var city = req.body && req.body.city;

    if(city === undefined ){
        var err = new Error('Bad city');
        err.status = 400;
        next(err);
        return;
    }
  
    var cities;
    fs.readFile(CITIES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            next(err);
            return;
        }
    
        cities = JSON.parse(data);
        cities.push(city);

        fs.writeFile(CITIES_FILE, JSON.stringify(cities, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            next(err);
            return;
        }
    
        res.json(cities);
    }
});

router.delete('/', function(req, res, next) {
    var city = req.body && req.body.city;

    if(city === undefined ){
        var err = new Error('Bad city');
        err.status = 400;
        next(err);
        return;
    }
  
    var cities;
    fs.readFile(CITIES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            next(err);
            return;
        }
    
        cities = _.without(JSON.parse(data), city);

        fs.writeFile(CITIES_FILE, JSON.stringify(cities, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            next(err);
            return;
        }
    
        res.json(cities);
    }
});

module.exports = router;
