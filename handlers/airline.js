var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();

var AIRLINES_FILE = './database/airlines.json';
var Airline = require('../model/airline');

router.get('/', function(req, res) {
    fs.readFile(AIRLINES_FILE, fileHasRead);

    function fileHasRead(err, data) {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.json(JSON.parse(data));
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
