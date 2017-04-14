import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {BooksListComponent} from './books/books-list/books-list.component';
import {HeaderComponent} from './header/header.component';
import {TruncatePipe} from './shared/truncate.pipe';
import {FavoriteComponent} from './favorite/favorite.component';
import {BookService} from "./books/book.service";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './welcome/welcome.component';
import { BookComponent } from './books/book/book.component';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'books', component: BooksListComponent },
      { path: 'book/:id', component: BookDetailsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [ BookService ],
  declarations: [ AppComponent,
    HeaderComponent,
    BooksListComponent,
    BookDetailsComponent,
    WelcomeComponent,
    TruncatePipe,
    FavoriteComponent,
    BookComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
