const Books = require('../../models/Books');
module.exports = function(app){

       app.get('/api/books', function(req, res){
        Books.find()
        .exec()
        .then((book) => {
            res.json(book);
            console.log(book);
        })
        .catch((err) => next(err));
    });

    app.post('/api/books',(req,res,next)=>{
                
        const { body } = req;

        const {
            isbn,
            author,
            title,
            language,
            type,
            nbrPages,
            publisher,
            year,
            cover,
            description
        } = body;

        console.log(body);
        


        newBook = new Books();
        newBook.isbn = isbn;
        newBook.author = author;
        newBook.title = title;
        newBook.language = language;
        newBook.type = type;
        newBook.nbrPages = nbrPages;
        newBook.publisher = publisher;
        newBook.year = year;
        newBook.cover = cover;
        newBook.description = description;

        newBook.save((err,book)=>{
          if (err) {
            return res.send(
              {
                success: false,
                message: 'Erreur: Serveur ne marche pas :/'
              });
    
          }
            
           
            return res.send(
              {
                success: true,
                message: 'Book saved'

              });
        });
    });
}
