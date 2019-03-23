import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:1234/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';


  constructor(private http:HttpClient, private router:Router) {
  }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.BASE_URL + '/register', user, {headers: headers}).subscribe(res=> {
    var authResponse = res;
      if(!authResponse['token']){
        return;
      }
      console.log(res['token']);
      console.log(res['firstName']);
      localStorage.setItem(this.TOKEN_KEY, authResponse['token']);
      localStorage.setItem(this.NAME_KEY, authResponse['firstName']);
    this.router.navigate(['/'])
    });
  }
}
