import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  contactMethod =[
  { id:1 , name:'Email'},
  {id:2 , name:'Ketan'}
    ]

  log(x)
  {
    console.log(x);
  }

  submit(f)
  {
    console.log(f);
  }
}
