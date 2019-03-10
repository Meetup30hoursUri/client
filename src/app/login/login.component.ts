import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private socialAuthService: AuthService) { }

  ngOnInit() {

    // (window as any).fbAsyncInit = function () {
    //   FB.init({
    //     appId: '2408990095842703',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v3.1'
    //   });
    //   FB.AppEvents.logPageView();
    // };
    //
    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));

  }

  // public facebookLogin() {
  //   let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       //this will return user data from facebook. What you need is a user token which you will send it to the server
  //       this.sendToRestApiMethod(userData.token);}
  //     )
  // }
//
//   sendToRestApiMethod(token: string): void {
//     this.http.post("url to facebook login here", { token: token }
//         .subscribe(onSuccess => {
//     //login was successful
//     //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
//   }, onFail => {
//     //login was unsuccessful
//     //show an error message
//   }))
// }

  // submitLogin() {
  //   console.log("submit login to facebook");
  // //  FB.login
  //   FB.login((response) => {
  //     console.log('submit login', response);
  //     if (response.authResponse) {
  //       //login  success
  //       //login success code here
  //       //redirect to home page
  //     } else {
  //       console.log('User login failed');
  //     }
  //   });
  // }
}
