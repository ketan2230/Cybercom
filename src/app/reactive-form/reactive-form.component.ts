import { AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './MustWatch';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          designation: ['', Validators.required],
          joining: ['', Validators.required],
          city: ['', [Validators.minLength(3)]],
          state: ['', [Validators.minLength(3)]],
          pincode: ['', [Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]*$")]],
          address: ['', [Validators.required,Validators.minLength(20)]],
          experience: ['', [Validators.required,Validators.maxLength(2),Validators.pattern("^[0-9]*$")]],
          email: ['', [Validators.required, Validators.email]],
          contact: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
          acontact: ['', [Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
          pan: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
          aadhar: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(12),Validators.pattern("^[0-9]*$")]],
          passport: ['', [Validators.minLength(8),Validators.maxLength(8)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
