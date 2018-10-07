import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';


import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LibraryComponent } from './library/library.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { BooksService } from './books-list/books.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    LibraryComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [BooksService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
