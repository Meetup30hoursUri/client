import { Injectable } from "@angular/core/src/di/injectable";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Promise } from 'q';


@Injectable
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return new Promise((resolve, reject) => {
      this.userService.isLoggedIn().then(() => {
        resolve(true);
      }).catch(() => {
        this.router.navigate(['welcome']);
        reject(false);
      })
    });
  }
}
