import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.list();
  }

}
