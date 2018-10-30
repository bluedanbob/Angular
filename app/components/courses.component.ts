import {Component} from 'angular2/core';
import {CourseService} from '../services/course.service';

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    {{ title }}
    <ul>
        <li *ngFor="#course of courses">
        {{course}}
        </li>
    </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
    title: string = "The title of course page";
    courses;// = ["Course1", "Course2", "Course3"];

    constructor(courseService: CourseService){

        this.courses=courseService.getCourses();

    }
 }
