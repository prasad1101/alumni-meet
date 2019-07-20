import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let u: any = localStorage.getItem("user")
    try {
      u = JSON.parse(u || {})
    } catch (error) {

    }
    const allowed = (u && (u.studentId || u.alumniId));
    console.log(allowed, u)
    if (null === allowed) {
      window.location.href = "/alumniMeet/#/"

      return false
    } else
      return true
  }

}
