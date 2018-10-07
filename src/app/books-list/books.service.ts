import { Injectable } from '@angular/core';
import { Book } from './book-model'
import {mock} from './../mock.js'
import { DataService } from './../data.service'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[]=[];
  bookGeter;

  constructor(private dataService: DataService) { }
  // getBook using mock
  getBooks(){

    mock.map(book=>{
      this.books.push(new Book(book.isbn,book.author,book.title,book.language,book.type,book.nbrPages,book.publisher,book.year,book.cover,book.description));
    })
    
    return this.books;
  }

  //getBooks using HTTP
  getBooks2(){
    this.dataService.getBooks().subscribe(
      data => { 
        this.bookGeter = data
      },
     err => console.error(err),
      () => console.log('done loading books')
    )

    mock.map(book=>{
      this.books.push(new Book(book.isbn,book.author,book.title,book.language,book.type,book.nbrPages,book.publisher,book.year,book.cover,book.description));
    })
    
    return this.books;
      
  };

  
}
