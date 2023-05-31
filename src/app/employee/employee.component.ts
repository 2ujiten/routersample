import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empArray!: Emp[];

  constructor(private authService: AuthService, private empService: EmpService, private router: Router) { }
 
  ngOnInit(): void {
    this.authService.setExitEmpDetaiRoute(false);
    this.empArray = this.empService.getAllEmployees();
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
