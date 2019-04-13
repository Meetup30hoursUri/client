import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router"
import {SharedService} from "./services/shared.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:1234/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  ROLE_KEY = 'role';

  constructor(private http:HttpClient, private router:Router,
              private sharedService: SharedService) {
  }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.BASE_URL + '/register', user, {headers: headers}).subscribe(res=> {
      var authResponse = res;
      if (!authResponse['token']) {
        return;
      }
      localStorage.setItem(this.TOKEN_KEY, authResponse['token']);
      localStorage.setItem(this.NAME_KEY, authResponse['firstName']);
      this.sharedService.emitOnUserRegistered(true);
     // this.router.navigate(['/'])
    }, error=> {
      console.log(error)
    });
  }

  login(loginData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.BASE_URL + '/login', loginData, {headers: headers}).subscribe(res=> {
      console.log(res);
      var loginResponse = res;
      localStorage.setItem(this.TOKEN_KEY, loginResponse['token']);
      localStorage.setItem(this.NAME_KEY, loginResponse['firstName']);
      localStorage.setItem(this.ROLE_KEY, loginResponse['role']);

      this.sharedService.emitOnUserRegistered(true);
      //this.router.navigate(['/'])
    }, error=> {
      console.log(error)
    });
  }

}
