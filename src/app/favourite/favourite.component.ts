import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
@Input() isFavourite:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavourite = !this.isFavourite;
    console.log(this.isFavourite);
  }
}
