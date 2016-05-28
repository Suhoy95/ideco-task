'use strict';

var fs = require('fs');
var _ = require('underscore');
var express = require('express');
var router = express.Router();

var STATES_FILE = './database/states.json';

router.get('/', function(req, res, next) {
    fs.readFile(STATES_FILE, fileHasRead);

    function fileHasRead(err, data) {
        if(err){
            next(err);
            return;
        }

        res.json(JSON.parse(data));
    }
});

router.post('/', function(req, res, next) {
    var state = req.body && req.body.state;

    if(state === undefined ){
        var err = new Error('Bad state');
        err.status = 400;
        next(err);
        return;
    }
  
    var states;
    fs.readFile(STATES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            next(err);
            return;
        }
    
        states = JSON.parse(data);
        states.push(state);

        fs.writeFile(STATES_FILE, JSON.stringify(states, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            next(err);
            return;
        }
    
        res.json(states);
    }
});

router.delete('/', function(req, res, next) {
    var state = req.body && req.body.state;

    if(state === undefined ){
        var err = new Error('Bad state');
        err.status = 400;
        next(err);
        return;
    }
  
    var states;
    fs.readFile(STATES_FILE, addNewState);

    function addNewState(err, data) {
        if(err){
            next(err);
            return;
        }
    
        states = _.without(JSON.parse(data), state);

        fs.writeFile(STATES_FILE, JSON.stringify(states, null, 4), fileHasSaved);
    }

    function fileHasSaved(err) {
        if(err){
            next(err);
            return;
        }
    
        res.json(states);
    }
});

module.exports = router;
