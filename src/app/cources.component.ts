import {Component} from '@angular/core'; 

@Component({
    selector:'cources' ,
    template: '<h1>{{ getTitle() }}</h1>'
})

export class CoursesComponent {

    title = "List of cources";

    getTitle()
    {
        return this.title;
    }

}