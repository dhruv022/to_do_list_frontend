import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({

  
  providedIn: 'root',
})
export class MemberAuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router : Router,
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authservice.MemberAuth) {
      return true;
    } else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
