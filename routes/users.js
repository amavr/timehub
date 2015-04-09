var User = require('../models/user').User;

/* GET users listing. */
exports.get = function (req, res) {
    
    var user = new User();
    user.email = 'test1@abc.ru';
    user.save(function (err) {
        console.log('user.save');
        console.log(arguments)
    });

    var x = User.find({}, function (data) {
        console.log('User.find');
        console.log(data);
    });
    console.log(x)

    res.send('Users page GET');
}

exports.post = function (req, res) {
    res.send('Users page POST');
}
