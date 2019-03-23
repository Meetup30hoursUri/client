import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: Http) { }

  getMessages() {
  //  let headers = new Headers();
  //  headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:1234/api/messages').toPromise();
  }
}
