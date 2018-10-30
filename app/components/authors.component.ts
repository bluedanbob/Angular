import{Component} from 'angular2/core';
import { AuthorService } from '../services/authors.service';

@Component({
    selector: 'authors',
    template: `
    <h1>Authors</h1>
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="#author of authors">
            {{author}}
        </li>
    </ul>
    `,
    providers: [AuthorService]
    
})

export class AuthorsComponent {
    title: string = "Title of Authors Page";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}