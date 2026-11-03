import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {

    if (sessionStorage.getItem("TOKEN")) {
      return true;
    } else {
      return this._router.createUrlTree(
        ['/login'],
        {
          queryParams: {
            returnUrl: state.url
          }
        }
      );
    }
  }
}