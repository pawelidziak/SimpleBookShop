import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  // Input
  @Input() reviews: number;
  @Input() favorite: string;
  //Output
  @Output() favoriteClicked: EventEmitter<string> = new EventEmitter();

  fave: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  onClick(): void {
    this.favoriteClicked.emit(`The favorite ${this.favorite} was saved`);
    this.fave = !this.fave;
  }

  isSelected(fave: boolean): boolean {
    if(!fave|| !this.fave){
      return false;
    }
    if(fave){
      return true;
    }
  }
}
