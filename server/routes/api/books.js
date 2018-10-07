const Books = require('../../models/Books');
module.exports = function(app){

       app.get('/books', function(req, res){
        Books.find()
        .exec()
        .then((book) => {
            console.log(book);
            res.json(book);
        })
        .catch((err) => next(err));
    });
}
