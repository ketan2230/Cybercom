import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
        UsernameValidators.shouldBeUnique
      ]),
      password: new FormControl('', Validators.required)
    })
  });

  // Form Builder Example
  form2;

  constructor(fb : FormBuilder){
    this.form2 = fb.group({
      name: ['', Validators.required],
      contact : fb.group({
        email:[],
        phone:[],
      }),
      topics: fb.array([])
    });
  }

  form1 = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    })
  }

  username() {
    return this.form.get('account.username');
  }
}
