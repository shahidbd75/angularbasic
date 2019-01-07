import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector:'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <img src={{imageUrl}} /><br/>
    <img [src]="imageUrl" />
    <ul>
        <li *ngFor='let course of courses'>
            {{course}}
        </li>
    </ul>
    <button class="btn btn-primary">Button</button><br/>
    <button class="btn btn-primary" [class.active]="isActive">Class Binding</button><br/>
    <button [style.backgroundColor]="isActive?'green':'white'">Style Binding</button>
    <div class="row">
    <div class="col-lg-6">
        <table>
            <tr>
                <td [attr.colSpan]="colSpan">
                    <input type='text' class='form-control' (keyup)='onKeyUp($event)' />
                    <input type='text' class='form-control' id='ku' (keyup.enter)='onEnterKeyUp()' />
                </td>
            </tr>
            <tr>
            <td>Two way binding</td>
                <td>
                    <input [value]='mail' (keyup.enter)='onKeyUpEmailAddr($event.target.value)'/>
                </td>
            </tr>
            <tr>
            <td>Banana in Box</td>
                <td>
                    <input ([ngModel])='fname' class='form-control' (keyup.enter)='getFirstName()'/>
                </td>
            </tr>
        </table>
    </div>
    <div class="col-lg-6" (click)="onDivClick()">
        <button class="btn btn-success" (click)='onButtonClick($event)'>Click Me!!</button>
    </div>
    </div>
    <div>
        Template Variable
        : <input #email class='form-control' (keyup.enter)='onKeyUpEmail(email.value)' />
    </div>
    `
})
export class CoursesComponent{
    title:string = "List Of Course";
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan =2;
    isActive=false;
    courses;
    mail='demo@ymail.com';
    fname;
    getTitle(){
        return this.title;
    }
    constructor(courseService:CoursesService){
        this.courses = courseService.getCourses();
    }
    onButtonClick($event){
        console.log($event);
        $event.stopPropagation();
        console.log('button was clicked');
    }
    onDivClick(){
        console.log('div was clicked');
    }
    onKeyUp ($event){
        if($event.keyCode==13){
            console.log('Enter was pressed');
        }
    }
    onEnterKeyUp(){
        console.log('ENTER key pressed');
    }
    onKeyUpEmail(email){
        console.log(email);
    }
    onKeyUpEmailAddr(value){
        console.log(value);
    }
    getFirstName(){
        console.log(this.fname);
    }
}