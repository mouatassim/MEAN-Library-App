import { Component, OnInit, ViewChild, ElementRef, EventEmitter ,Output  } from '@angular/core';
import  { Book } from './../book-model';
import { BooksService } from './../books.service';
import { Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent implements OnInit {

  constructor( private booksService : BooksService,private router:Router,private route:ActivatedRoute) { }

  bookAdded = new EventEmitter <Book> (); 
  
  @ViewChild('titleBook') titleBook: ElementRef;
  @ViewChild('authorBook') authorBook: ElementRef;
  @ViewChild('languageBook') languageBook: ElementRef;
  @ViewChild('typeBook') typeBook: ElementRef;
  @ViewChild('nbrPagesBook') nbrPagesBook: ElementRef;
  @ViewChild('publisherBook') publisherBook: ElementRef;
  @ViewChild('descriptionBook') descriptionBook: ElementRef; 
  @ViewChild('yearBook') yearBook: ElementRef; 

  ngOnInit() {

  }

  addBook(){
    const title = this.titleBook.nativeElement.value;
    const author = this.authorBook.nativeElement.value;
    const language = this.languageBook.nativeElement.value;
    const type = this.typeBook.nativeElement.value;
    const nbrPages = this.nbrPagesBook.nativeElement.value;
    const publisher = this.publisherBook.nativeElement.value;
    const year = this.yearBook.nativeElement.value;
    const description = this.descriptionBook.nativeElement.value;
    
    console.log("somthing happen");
    const newBook = new Book ("3",author,title,language,type,nbrPages,publisher,year,"https://spark.adobe.com/images/landing/examples/how-to-book-cover.jpg",description);

    this.booksService.addBook(newBook);
  }
  
}
