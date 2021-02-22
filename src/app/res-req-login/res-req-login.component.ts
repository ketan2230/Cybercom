import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { badRequest } from '../common/400-error';
import { LoginSuccessService } from '../_services/login-success.service';

@Component({
  selector: 'app-req-res-login',
  templateUrl: './req-res-login.component.html',
  styleUrls: ['./req-res-login.component.css']
})
export class ReqResLoginComponent implements OnInit {

  frm;
  constructor(fb: FormBuilder, private services: LoginSuccessService, private router: Router) {

    this.frm = fb.group({

      username: ['',
        [Validators.required,
        ]],

      password: ['', Validators.required,]


    });

    if (localStorage.getItem('currentUser') !== null) {
      this.router.navigate(['/home']);
    }

  }

  ngOnInit(): void {
  }
  get username() {
    //console.log('hey');
    return this.frm.get('username');
  }

  get password() {
    return this.frm.get('password');
  }
  login() {

    let data = { "email": this.username?.value, "password": this.password?.value };

    this.services.addData(data)
      .subscribe((res: any) => {

        if (res.token) {
          console.log(res.token);
          localStorage.setItem('currentUser', "loggedin");
          this.router.navigate(['/home']);

        }


      },
        (error: Response) => {
          if (error instanceof badRequest) {
            console.log(error);
            alert('wrong password or username');
          }
          else throw error;
        })


  }

}