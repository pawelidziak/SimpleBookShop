import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBook} from "../book";
import {BookService} from "../book.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  // selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: IBook;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _bookService: BookService) {
    console.log(this._route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = params['id'];
        this.getBook(id);
      });
  }

  getBook(id: string) {
    this._bookService.getBook(id).subscribe(
      book => this.book = book,
      error => this.errorMessage = <any>error
    );
  }

}
