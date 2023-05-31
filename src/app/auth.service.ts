import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  exitEmpDetaiRoute = false;

  loggedIn = false;

  constructor() { }

  login(){
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isUserLoggedIn() {
    if (this.loggedIn) {
      return true;
    } else {
      return false;
    }
  }

  setExitEmpDetaiRoute(value: boolean){
    this.exitEmpDetaiRoute = value;
  }

  getExitEmpDetaiRoute(){
    return this.exitEmpDetaiRoute;
  }
}
