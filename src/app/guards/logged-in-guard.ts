import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.loggedIn$
      .pipe(map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      }));
  }

}
