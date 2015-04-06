var express = require('express');
var router = express.Router();

//var config = require('./config/config');
//var mongoose = require('mongoose').Mongoose;
//db = mongoose.connect(config.conf.mongodburl)

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;