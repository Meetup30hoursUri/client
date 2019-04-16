import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router"
import {SharedService} from "./services/shared.service";
import { User } from './user/User';
import { AlertService } from './services/alert/alert.service'
import { first } from 'rxjs/operators';
import { tokenKey } from '@angular/core/src/view';
import {UserToRegister} from "./register/register.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:1234/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  ROLE_KEY = 'role';
  FIREBASE_KEY= 'firebase_key';

  constructor(private http:HttpClient, private router:Router,
              private sharedService: SharedService,
              private alertService: AlertService) {
  }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get role() {
    return localStorage.getItem(this.ROLE_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    // console.log("from isAuthenticated: 1 " + this.token)
    // console.log("from isAuthenticated: 2 " + !this.token)
    // console.log("from isAuthenticated: 2 " + !!this.token)

    return !!this.token;
  }


  register(user: UserToRegister) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.BASE_URL + '/register', user, {headers: headers}).subscribe(res=> {
      var authResponse = res;
      console.log(authResponse)
      if (!authResponse['user']['token']) {
        return;
      }
      localStorage.setItem(this.FIREBASE_KEY, authResponse['user']['userKey']);
      localStorage.setItem(this.TOKEN_KEY, authResponse['user']['token']);
      localStorage.setItem(this.NAME_KEY, authResponse['user']['name']);
      localStorage.setItem(this.ROLE_KEY, authResponse['user']['role']);
      this.sharedService.emitOnUserRegistered(true);
      this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
      }, error=> {
        console.log(error);
        this.alertService.error(error);
      });
  }

  login(loginData, returnUrl: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.BASE_URL + '/login', loginData, {headers: headers}).subscribe(res=> {
      console.log(res);
      var loginResponse = res;
      localStorage.setItem(this.FIREBASE_KEY, loginResponse['user']['userKey']);
      localStorage.setItem(this.TOKEN_KEY, loginResponse['user']['token']);
      localStorage.setItem(this.NAME_KEY, loginResponse['user']['name']);
      localStorage.setItem(this.ROLE_KEY, loginResponse['user']['role']);

      this.sharedService.emitOnUserRegistered(true);
     this.router.navigate([returnUrl]);
    }, error=> {
      console.log(error)
      this.alertService.error(error);
    });
  }

  logout() {
    localStorage.setItem(this.TOKEN_KEY, null);
    localStorage.setItem(this.ROLE_KEY, null);
    localStorage.setItem(this.NAME_KEY, null);
    localStorage.setItem(this.FIREBASE_KEY, null);
  }

}

