import { Component } from '@angular/core';
import { favouriteEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  pop={isFavourite:true,isTaken:false};

  onFavouriteChanged(eventArgs:favouriteEventArgs){
    console.log('favourite changed successfully' + eventArgs.newValue);
  }
}
