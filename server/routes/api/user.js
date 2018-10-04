const mongoose = require('mongoose');
const Users = require('../../models/Users');
const UserSession = require('../../models/UserSession');
const bcrypt = require('bcrypt');

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


