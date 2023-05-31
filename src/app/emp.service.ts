import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService implements Resolve<Emp>{

  currentEmp!: Emp;
  empArray: Emp[] = [
    new Emp(1, 'Akash', 'WestIn', 1000 ),
    new Emp(2, 'Kitty', 'Oxford', 2000),
    new Emp(3, 'Sam', 'Galaxy', 3000),
    new Emp(4, 'Martha', 'Simura', 4000),
    new Emp(5, 'Yash', 'Kerye', 5000),
    new Emp(6, 'Rimyuws', 'Riumil', 6000)
  ];

  constructor() { }

  resolveEmpID!: any;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Emp  {
    this.resolveEmpID = route.paramMap.get('id');
    return this.getEmployeeById(this.resolveEmpID);
  }

  getAllEmployees() {
    return this.empArray;
  }

  setEmployee(emp: Emp) {
    this.empArray.push(emp);
  }

  getEmployeeById(id: number): Emp {
    this.currentEmp = this.empArray.filter(x => x.empId == id)[0];
    return this.currentEmp;
  }
}
