import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from 'src/app/auth.service';
import {Roles} from "../model/Roles";
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AlertService} from '../services/alert/alert.service';
// import { UserService } from '../services/alert/alert.service';

export class UserToRegister {
  name:string;
  email:string;
  password:string;
  lowercasename:string;
  role:string;

  constructor() {
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  Roles = Roles;
  user:UserToRegister;
  submitted = false;

  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router,
              private alertService:AlertService) {
    // redirect to home if already logged in
    if (this.auth.isAuthenticated) {
      this.router.navigate(['/']);
    }
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: [Roles.Lecturer, Validators.required],
    }, {validator: matchingFields('password', 'confirmPassword')})
  }

  ngOnInit() {
  }

  onSubmitRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.errors);
    console.log(this.form.value);
    this.user = new UserToRegister();
    this.user.name = this.form.value.firstName + " " + this.form.value.lastName;
    this.user.lowercasename = this.user.name.toLowerCase();
    this.user.email = this.form.value.email;
    this.user.role = this.form.value.role;
    this.user.password = this.form.value.password;
    console.log(this.user);
    this.auth.register(this.user);
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

  onRoleChecked(value:Roles) {
    console.log(value)
    this.form.controls.role.value = value;
    console.log(this.form.controls)
  }
}

function matchingFields(field1, field2) {
  return form => {
    if (form.controls[field1].value !== form.controls[field2].value) {
      return {mismatchedFields: true}
    }
  }
}

function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(control.value) ? null : {invalidEmail: true}
  }
}
