import {Component, OnInit} from '@angular/core';
import {SharedService} from "./services/shared.service";
import {Roles} from "./model/Roles";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  ROLE_KEY = 'role';

  ROLES=Roles;
  currRole;

  constructor(private sharedService:SharedService,  private router:Router) {

  }

  //Hi there! That's Katrin
  //Hi all, this is Julia
  //Hi, this is Yarden

  ngOnInit() {
    // if(localStorage.getItem(this.ROLE_KEY) )
    //   console.log(localStorage.getItem(this.ROLE_KEY))
    //   console.log("yo")

    this.sharedService.onUserRegisteredEmitted$.subscribe(()=> {
     // console.log(localStorage.getItem(this.ROLE_KEY))
      console.log("yo")
      this.currRole = localStorage.getItem(this.ROLE_KEY);
      if(this.currRole ===this.ROLES.Lecturer){
        console.log("HEy, I'm lecturer")
        this.router.navigate(['/'])
      }else if(this.currRole ===this.ROLES.Organizer){
        console.log("HEy, I'm Organizer")
        this.router.navigate(['/'])
      }
    })
  }
}
