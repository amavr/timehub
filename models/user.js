var cfg = require('../config/config');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect(cfg.mongourl);
//mongoose.connect('mongodb://localhost/timehub');

var schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    time_zone: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

exports.User = mongoose.model('User', schema);
