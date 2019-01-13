import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseCategory: Category[] = 
  [{id:1,name:"IT"},
  {id:2,name:"Development"},
  {id:3,name:"Architecture"},
  {id:4,name:"Manufacturing"},
  {id:5,name:"Creative"},
  {id:6,name:"Business"}];
  constructor() { }

  ngOnInit() {
  }

}
export interface Category{
  id;
  name:string
}
