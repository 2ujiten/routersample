import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Welcome to Employee Registry";
  ngOnInit(): void {
  }

  constructor(private authService: AuthService, private router: Router) {}

  doLogin() {
    this.authService.login();
  }

  doLogout() {
    this.authService.logout();
  }
 
  doRegister() {
    this.router.navigate(['registry']);
  }
}
