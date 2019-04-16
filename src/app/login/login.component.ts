import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {WebService} from 'src/app/services/web.service';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import { AlertService } from 'src/app/services/alert/alert.service'; 
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {

  form;
  loginData;
  submitted = false;
  returnUrl: string;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) {
    this.form = fb.group({
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required]
    });
    // redirect to home if already logged in
    if (this.authService.isAuthenticated) { 
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValid()]],
      password: ['', Validators.required]});

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmitLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    console.log(this.form);
    console.log(this.form.controls);
    this.loginData = this.form.value;
   // if(this.loginData != undefined)
    this.authService.login(this.loginData, this.returnUrl);
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
