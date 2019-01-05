import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector:'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <img src={{imageUrl}} />
    <img [src]="imageUrl" />
    <ul>
        <li *ngFor='let course of courses'>
            {{course}}
        </li>
    </ul>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
    <button [style.backgroundColor]="isActive?'green':'white'">Style Binding</button>
    <table>
        <tr>
            <td [attr.colSpan]="colSpan"></td>
        </tr>
    </table>`
})
export class CoursesComponent{
    title:string = "List Of Course";
    imageUrl = "http://lorempixel.com/400/200/";
    colSpan =2;
    isActive=false;
    courses;
    getTitle(){
        return this.title;
    }
    constructor(courseService:CoursesService){
        this.courses = courseService.getCourses();
    }
}