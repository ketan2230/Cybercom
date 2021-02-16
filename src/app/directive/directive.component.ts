import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  cources = [1];
  canSave=false ;
  info ;

onAdd()
{
  this.info.push({name:'hardik', age:22 });
}

onRemove(i)
{
  let index = this.info.indexOf(i);
  this.info.splice(index,1);
}

onUpdate(i)
{
  i.name = 'UPDATED';
}

onDisplay()
{
  this.info = [
    { name : 'Ketan', age : 22 },
    {name : 'Ruchita', age : 22 },
    {name : 'Jemmu' , age : 10}
  ];
}

trackInfo(index , i)
{
  return i ? i.id : undefined;
}

  viewMode = "Something";

  constructor() { } undefined;

  ngOnInit(): void {
  }
}
