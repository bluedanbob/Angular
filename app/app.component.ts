import {Component} from 'angular2/core';
import {CoursesComponent} from './components/courses.component';
import {AuthorsComponent} from './components/authors.component';

@Component({
    selector: 'app',
    template: '<h1>This is a test of an angular component!</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }