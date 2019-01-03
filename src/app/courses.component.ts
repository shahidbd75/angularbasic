import { CoursesService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector:'courses',
    template: `<h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor='let course of courses'>
            {{course}}
        </li>
    </ul>`
})
export class CoursesComponent{
    title:string = "List Of Course";
    courses;
    getTitle(){
        return this.title;
    }
    constructor(){
        let servics = new CoursesService();
        this.courses = servics.getCourses();
    }
}