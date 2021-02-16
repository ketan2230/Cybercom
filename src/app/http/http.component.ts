import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent{

  posts : any[] ;

  constructor(http : Http){
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response.json();
      });
  }
}
