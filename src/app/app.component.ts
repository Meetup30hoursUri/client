import {Component, OnInit} from '@angular/core';
import {SharedService} from "./services/shared.service";
import {Roles} from "./model/Roles";
import {Router} from "@angular/router";
import {AngularFireDatabase} from 'angularfire2/database'
import { AuthService } from './auth.service'

// export class Theme {
//   topic: Observable<string[]>;
// }
// export class Lecturer {
//   name: string;
//   themes: Theme;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // lecturers: Observable<any[]>;
  title = 'Meetups';
  ROLES = Roles;
  currRole: string;
  currentUser: boolean;

  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  ROLE_KEY = 'role';
  // lecturers: Observable<any[]>;

  constructor(private sharedService:SharedService,
              private router:Router,
              private authService:AuthService) {
              // console.log("AppComponent constructor: ")
              this.sharedService.onUserRegisteredEmitted$.subscribe(()=> {
                this.currRole = this.authService.role;
                this.currentUser = this.authService.isAuthenticated;
                // console.log("AppComponent ngOnInit: " + this.currentUser)
                // if (this.currRole === this.ROLES.Lecturer) {
                //   this.router.navigate(['/'])
                // } else if (this.currRole === this.ROLES.Organizer) {
                //   this.router.navigate(['/'])
                // }
              })              // console.log("AppComponent constructor: currentUser " + this.currentUser)

  }

  ngOnInit() {
    // this.currRole = this.authService.role;
    // this.currentUser = this.authService.isAuthenticated;
    // console.log("AppComponent ngOnInit: " + this.currentUser)
    this.sharedService.onUserRegisteredEmitted$.subscribe(()=> {
      this.currRole = this.authService.role;
      this.currentUser = this.authService.isAuthenticated;
      // console.log("AppComponent ngOnInit: " + this.currentUser)
      // if (this.currRole === this.ROLES.Lecturer) {
      //   this.router.navigate(['/'])
      // } else if (this.currRole === this.ROLES.Organizer) {
      //   this.router.navigate(['/'])
      // }
    })
  }

  onLogoutClicked(){
    this.authService.logout();
    this.currentUser = null;
    this.currRole = '';
    localStorage.setItem(this.NAME_KEY, null);
    localStorage.setItem(this.TOKEN_KEY, null);
    localStorage.setItem(this.ROLE_KEY, null);
    this.router.navigate(['login']);
    console.log("AppComponent onLogoutClicked: " + this.currentUser)
  }
}
