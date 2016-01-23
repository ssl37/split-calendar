// app/models/users.js
var db = require('../config/db.js');

'use strict';

function userLookup(req,res,next,user_id) {
    var uname = db.user_model.findOne({_id : user_id}, "name", function (err, uname) {
        if (err) { console.log(err); next(err); }
        else if (uname) { req.user = uname.name; next(); }
        else { next(new Error("Failed to find user for id "+user_id)); }
    });
};

function pullAllUsers (req,res,next) {
    db.user_model.find(function (err, u) {
        if (err) {
            next(err);
        }
        res.json(u); // return all splits in JSON format([
    });
    //next();
};

function pullUserbyName (req,res,next) {
    db.user_model.findOne({ name: req.user }, function (err, user) {
        if (err) {
            next(err);
        }
        res.json(user); // return all splits in JSON format([
    });
    //next();
};

//function pullUserbyId (req,res,next,id) {
//    db.user_model.findById(id, function (err, user) {
//        if (err) {
//            next(err);
//        }
//        res.json(user); // return all splits in JSON format([
//    });
//    next();
//};

function addUser (req, res, next) {
    var userEntry = new db.user_model();
    console.log(req.body);
    userEntry.name = req.body.name;
    userEntry.user = req.body.user;
    userEntry.prefContact = req.body.prefContact;
    console.log(userEntry);
    userEntry.save(function(err) {
        if (err) { console.log(err); next(err); }
        res.json({user_id: userEntry._id});
    });
    //next();
//    return res.json({ week: wk, night: nite, user: u });
};

function deleteUser (req, res, next) {
    db.user_model.findOneAndRemove({name: req.user}, function (err, doc) {
        if (err) { console.log(err); next(err); }
        res.json(doc);
    });
    //next();
};

module.exports = {
    userLookup: userLookup,
    pullAllUsers: pullAllUsers,
    pullUserbyName: pullUserbyName,
    addUser: addUser,
    deleteUser: deleteUser
};