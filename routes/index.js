/**
 * Если роутов станет много -- их можно разбить по иерархии файлов
 */
// var checkAuth = require('middleware/checkAuth');


module.exports = function (app) {
    
    app.get('/users', require('./users').get);
    
    app.post('/users', require('./users').post);
    
    app.get('/', require('./root').get);
};



//var express = require('express');
//var router = express.Router();

///* GET home page. */
//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

//module.exports = router;