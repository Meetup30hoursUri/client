import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var currentUser = this.authService.isAuthenticated;
      console.log("canActivate " + this.authService.isAuthenticated)
      if (currentUser) {
          // authorised so return true
          console.log(this.authService.name)
          console.log("user authorised")
          return true;
      }
    
    // not logged in so redirect to login page with the return url
    console.log("user unauthorised")
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
}


