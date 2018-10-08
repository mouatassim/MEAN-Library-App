import { OnInit, Component } from '@angular/core';
import { Book } from './book-model'
import { BooksService } from './books.service';

import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})


export class BooksListComponent implements OnInit  {

  displayedColumns: string[] = ['isbn','author','title','cover','edit','delete'];
  books : Book[];
  bookGeter;



  constructor(public booksSerivce : BooksService,private router:Router,private route:ActivatedRoute){}
  
  ngOnInit(){
     
      this.booksSerivce.getBooks2().subscribe(data =>{
       console.log(typeof(data));
       this.books = Object.values(data); 
   })
    

  
   
}
 
  
   

   
  
  editIt(data){
    const IndexTr = Number(data.path[2].rowIndex);
    console.log(this.books[IndexTr-1]);
       
  }

  onNavigate(){
    this.router.navigate(['new']);
   }
 
  
}
