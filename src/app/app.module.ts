import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LibraryComponent } from './library/library.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NewbookComponent} from './books-list/newbook/newbook.component'
import { BooksService } from './books-list/books.service';
import { DataService } from './data.service';

const appRoutes: Routes = [
  {path:"", component:LibraryComponent},
  {path:"new",component:NewbookComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    LibraryComponent,
    HeaderComponent,
    NewbookComponent
   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BooksService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
