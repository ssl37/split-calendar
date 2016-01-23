var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUrl = 'mongodb://localhost/splits-dev'
var mongoOptions = {};

mongoose.connect(mongoUrl, mongoOptions, function (err, res) {
    if(err){
        console.log('[DB] Connection failed to ' + mongoUrl + '. ' + err);
    } else {
        console.log('[DB] Successfully connected to: ' + mongoUrl);
    }
});

var userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    user : {type: String, required: true},
    prefContact : {type: String, required: true},
});

var splitSchema = new Schema({
    week : {type: Number, required: true },
    night : {type: String, required: true },
    names : {type: Array}
});

// export our models
exports.user_model = mongoose.model('Users', userSchema);
exports.split_model = mongoose.model('Splits', splitSchema);
