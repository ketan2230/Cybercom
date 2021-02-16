import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leap-year',
  template:`
  <p>enter year to know its leap year or not</p><br>
<input type="number" [(ngModel)]='year' (focusout)='checkLeapYear()' /><br>
<h1>{{year}}{{ Slength }}</h1>

  `

})
export class LeapYearComponent{

  year:number= 0;
  str:string='';
  Slength : string = '';
  // program to check leap year

  strLength:number =0;

    checkLeapYear() {

    //three conditions to find out the leap year
    if ((0 == this.year % 4) && (0 != this.year % 100) || (0 == this.year % 400)) {
        console.log(this.year + ' is a leap year');
     
        this.Slength=" Leap Year";
    } else {
        console.log(this.year + ' is not a leap year');
 
        this.Slength=" Not a Leap Year";
    }

}

}
