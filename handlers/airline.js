var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();

var AIRLINES_FILE = './database/airlines.json';
var Airline = require('../model/airline');

router.get('/', function(req, res) {
    var filters = {
        fromCity: req.query && req.query.fromCity,
        toCity: req.query && req.query.toCity,
        state: req.query && req.query.state
    };

    fs.readFile(AIRLINES_FILE, fileHasRead);

    function fileHasRead(err, data) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

        var airlines = JSON.parse(data);
        var selection = _.filter(airlines, isRequiredAirline);

        res.json(selection);
    }

    function isRequiredAirline(airline){
        for(var parameter in filters)
            if(filters[parameter] && filters[parameter] != airline[parameter])
                return false;

        return true;
    }
});

router.get('/amount', function(req, res) {
    fs.readFile(AIRLINES_FILE, fileHasRead);

    function fileHasRead(err, data) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var amount = JSON.parse(data).length;
        res.json({amount: amount});
    }
});

router.post('/', function(req, res) {
    var airline = req.body && req.body.airline;

    if(airline === undefined ){
        console.log(new Error('Bad airline'));
        res.sendStatus(400);
        return;
    }
    
    airline = new Airline(airline);
    
    var airlines;
    fs.readFile(AIRLINES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
    
        airlines = JSON.parse(data);
        airlines.push(airline);

        fs.writeFile(AIRLINES_FILE, JSON.stringify(airlines, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
    
        res.json(airlines);
    }
});

router.delete('/', function(req, res) {
    var state = req.body && req.body.state;

    if(state === undefined ){
        console.log(new Error('Bad state'));
        res.sendStatus(400);
        return;
    }
  
    var states;
    fs.readFile(AIRLINES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
    
        states = _.without(JSON.parse(data), state);

        fs.writeFile(AIRLINES_FILE, JSON.stringify(states, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
    
        res.json(states);
    }
});

module.exports = router;
