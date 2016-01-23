// app/models/splits.js
var db = require('../config/db.js');
var weeknights = require('./weeknights.js');

'use strict';

function splitsLookup (req,res,next,weeknite) {
    var parsed = weeknights.parseWeeknight(weeknite);
    if(parsed === null) {
        next(new Error("Weeknight was not parsed correctly"));
    }
    console.log(parsed);
    if( !weeknights.checkWeek(parsed[2]) || !weeknights.checkNight(parsed[1]) ) {
        next(new Error("Invalid Weeknight"));
    }
    req.night = parsed[1];
    req.week = parsed[2];
    next();
};
    
function pullAllSplits (req,res,next) {
    db.split_model.find(function (err, splits) {
        if (err) {
            next(err);
        }
        res.json(splits); // return all splits in JSON format([
    });
    //next();
};

function pullSplitsbyNight (req, res, next) {
    db.split_model.findOne({ week: req.week, night: req.night}, function (err, splits) {
        if (err) {
            next(err);
        }
        res.json(splits); // return all splits in JSON format([
    });
    //next();
};

function updateNight (req,res,next) {
    db.split_model.findOneAndUpdate({week: req.week, night: req.night}, {$push: {names: req.user}}, {safe: true, upsert: true}, function (err, doc) {
        if (err) { console.log(err); next(err);}
        res.json(doc);
    });
    //next();
};

function deleteNight (req, res, next) {
    db.split_model.findOneAndUpdate({week: req.week, night: req.night}, {$pull: {names: req.user}}, {safe: true, upsert: true}, function (err, doc) {
        if (err) { console.log(err); next(err); }
        res.json(doc);
    });
    //next();
};

module.exports = {
    splitsLookup: splitsLookup,
    pullAllSplits: pullAllSplits,
    pullSplitsbyNight: pullSplitsbyNight,
    updateNight: updateNight,
    deleteNight: deleteNight
};
