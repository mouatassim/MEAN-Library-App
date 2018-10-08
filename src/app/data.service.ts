import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private _http : HttpClient){}


  getBooks(){
      return this._http.get('/api/books')
  };
  addBook(book){
    return this._http.post('/api/books',
    {
        isbn:book.isbn,
        author: book.author,
        title:book.title,
        language:book.language,
        type:book.type,
        nbrPages:book.nbrPages,
        publisher:book.publisher,
        year:book.year,
        cover:book.cover,
        description:book.description

    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
        },
        error => {
            console.log("Error", error);
        }
    );
};
}
