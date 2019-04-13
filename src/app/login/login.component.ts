import {Component, OnInit} from '@angular/core';
import {WebService} from 'src/app/services/web.service';
import {FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  form;
  loginData;

  constructor(private fb:FormBuilder,
              private authService:AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  onSubmitLogin() {
    console.log(this.form);
    console.log(this.form.controls);
    this.loginData = this.form.value;
    if(this.loginData != undefined)
    this.authService.login(this.loginData);
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }
}
function emailValid() {
  return control => {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(control.value) ? null : {invalidEmail: true}
  }
}
