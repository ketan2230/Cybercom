import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-length',
  template:`
  <p>Enter String</p>
<input type="text" [(ngModel)]='str' (focusout)='checkString()' /><br>
<h1>String Length : {{len}}</h1>
  `
})
export class StringLengthComponent{
  len:number= 0;
  i:number=0;
  str:string='';

  checkString()
  {
    this.len=this.str.length;
  }
}
