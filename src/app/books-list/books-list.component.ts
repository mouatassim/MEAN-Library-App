import { OnInit, Component } from '@angular/core';
import { Book } from './book-model'
import { BooksService } from './books.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})


export class BooksListComponent implements OnInit  {

  displayedColumns: string[] = ['isbn','author','title','cover','edit','delete'];
  books : Book[];


  constructor(public booksSerivce : BooksService){}
  
  ngOnInit(){
  this.books = this.booksSerivce.getBooks2();  
  
   }

   
  
  editIt(data){
    const IndexTr = Number(data.path[2].rowIndex);
    console.log(this.books[IndexTr-1]);
       
  }
  
}
