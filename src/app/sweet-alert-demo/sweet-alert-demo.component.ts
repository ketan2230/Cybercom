import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-sweet-alert-demo',
  templateUrl: './sweet-alert-demo.component.html',
  styleUrls: ['./sweet-alert-demo.component.css']
})
export class SweetAlertDemoComponent {

  //alert box
simpleAlert(){
  Swal.fire('Alert!');
}

// sucess box
alertWithSuccess(){
  Swal.fire(
    'Thank you...',
    'You submitted succesfully!',
    'success'
  )
}

// confirm box
confirmBox(){
  Swal.fire({
    title: 'Are you sure want to remove?',
    text: 'You will not be able to recover this file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe',
          'error'
      )
    }
  })
}}
