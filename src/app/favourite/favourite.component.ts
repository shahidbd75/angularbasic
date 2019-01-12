import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
@Input('isFavourite') isFavourite:boolean=false;
@Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavourite = !this.isFavourite;
    console.log(this.isFavourite);
    
    this.change.emit({newValue:this.isFavourite});
  }
}

export interface favouriteEventArgs {
  newValue: boolean;
}