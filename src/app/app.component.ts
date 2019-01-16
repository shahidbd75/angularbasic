import { Component } from '@angular/core';
import { favouriteEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alor Sathi';
  pop={isFavourite:true,isTaken:false};

  task = {
    title:"Introduction to Angular",
    author:"Shahid",
    assignee:{
      name: "John Smith"
    }
  }

  viewMode: string ="other";
  canSave:boolean = false;
  

  onFavouriteChanged(eventArgs:favouriteEventArgs){
    console.log('favourite changed successfully. ' + eventArgs.newValue);
  }
}
