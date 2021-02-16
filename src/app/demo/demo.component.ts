import { DemoService } from './demo.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-demo',
  template:`
  <h2>{{ title }}</h2>
  <h1>*ngFor Demo</h1>
  <ul>
    <li *ngFor="let demo of demos"> 
      {{ demo }}
    </li>
  </ul>

  <h1>Event Binding Demo</h1>
  <input [(ngModel)] ="email" (keyup.center)= "onKeyUp()" />

  <h1>Button Activity Demo</h1>
  <button class="btn btn-primary" [class.active]="isActive">Save</button>
  
  <h1>Style Binding</h1>
  <button [style.backgroundColor]="hActive ? 'green' : 'red'">Like </button>
  
  <h1>Link Parcing Demo</h1>
  <img src="{{ src }}" height=1000px width=500px />

  <h1>Attr Class Binding</h1>
  <table border=1px>
    <tr>
      <td [attr.colspan]="colSpan">Hellonpm </td>
    </tr>
  </table>

  <h1>Event Binding</h1>
  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div>

  <h1>Event Filtering</h1>
  <input (keyup.shift)="onKeyU()" />

  <h1>Template Variable</h1>
  <input #Templateemail (keyup.enter)="onKeyUEnter(Templateemail.value)" />

  <h1>Pipes</h1>
  <h4>
  {{ course.title | uppercase}}<br>
  {{ course.rating | number :'1.2-2'}}<br>
  {{ course.students | number}}<br>
  {{ course.price | currency}}<br>
  {{ course.releaseDate | date:'shortDate' }}
  </h4>

  ` 
})
export class DemoComponent{

  email = "ketanvb99@gmail.com"

  text = 'Science fiction literature, film, television, and other media have become popular and influential over much of the world. Besides providing entertainment, it can also criticize present-day society, and is often said to inspire a "sense of wonder".[3] Prevalent elements include robots, extraterrestrials, space travel, outer space, and futuristic technology.'

  course = {
    title : "Hello",
    rating : 4.9876,
    students : 10000,
    price : 560.87,
    releaseDate :new Date(2015,5,1)
  }

  onKeyUp()
  {
    console.log(this.email);
  }

  onKeyUEnter(Templateemail)
  {
    console.log(Templateemail);
  }

onKeyU()
  {
    
    console.log("Shift Key Was Press");
  }


  onDivClicked()
  {
    console.log("Div Was Clicked")
  }

  onSave($event)
  {
    $event.stopPropagation();
    console.log("Div Was Clicked")
  }



  title="List of Cources";
  isActive= true;
  hActive = false;
  colSpan=2;
  demos;
  src = "https://1.bp.blogspot.com/-NL4Vhtj6Haw/XudBvC-_aeI/AAAAAAAALgI/32m69PO2Dy82Gv414GCdMlShntWkslWbACK4BGAsYHg/s2560/pubg-mobile-jungle-wallpaper.jpg";

  constructor(service : DemoService)
  {
    this.demos= service.getCources();
  }

}
