import {Component, OnInit} from '@angular/core';
import {IBook} from "../book";
import {BookService} from "../book.service";

@Component({
  // selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list-component.css']
})

export class BooksListComponent implements OnInit {

  books: IBook[];
  favoriteMessage: string = '';
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;
  errorMessage: string;

  constructor(private _bookService: BookService) { }

  ngOnInit() { this.getBooks() }

  getBooks() {
    this._bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error
      );
  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
