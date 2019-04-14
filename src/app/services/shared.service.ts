import { Injectable } from '@angular/core';
import {EventEmitter} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private onUserRegistered: EventEmitter<boolean> = new EventEmitter();
  onUserRegisteredEmitted$ = this.onUserRegistered.asObservable();

  emitOnUserRegistered(value){
    console.log("emitOnUserRegistered")
    this.onUserRegistered.next(value);
  }
}
