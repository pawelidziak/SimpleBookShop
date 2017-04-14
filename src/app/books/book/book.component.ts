import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book : IBook;

  constructor() { }

  ngOnInit() {
  }

}
