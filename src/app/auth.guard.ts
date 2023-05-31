import { WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<EmpDetailComponent> {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          // ActivatedRouteSnapshot contains the params, queryparams, framents
          // RouterStateSnapshot holds the current state i.e. current url
          // if(this.authService.isUserLoggedIn()){
          //   return true;
          // }else {
          //   return false;
          // }

          return true;
  }
  canDeactivate(
    component: EmpDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //return this.authService.getExitEmpDetaiRoute();
      return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentDay = new Date();
    //return currentDay.getDay() === WeekDay.Wednesday;
    return true;
  }

}
