const Users = require('../../models/Users');
module.exports = function(app){

       app.get('/users', function(req, res){
        Users.find()
        .exec()
        .then((user) => {
            console.log(user);
            res.json(user);
        })
        .catch((err) => next(err));
    });
}


