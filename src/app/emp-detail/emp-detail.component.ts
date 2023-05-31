import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
 
  empDetail!: Emp;

  constructor(private router: Router, private actRouter: ActivatedRoute, private empServcie: EmpService,
    private authService: AuthService) { }

  ngOnInit(): void {
    //  const id = this.actRouter.snapshot.params['id'];
    //  this.empDetail = this.empServcie.getEmployeeById(id);

    //  const id = this.actRouter.snapshot.queryParams['empid'];
    //  this.empDetail = this.empServcie.getEmployeeById(id);

    // this.actRouter.params.subscribe((param:  Params) => {
    //   this.empDetail = this.empServcie.getEmployeeById(param['id']);
    // });

    // this.actRouter.queryParams.subscribe((param:  Params) => {
    //   this.empDetail = this.empServcie.getEmployeeById(param['empid']);
    // });

    //resolve
    this.actRouter.data.subscribe((data: Data) => {
      this.empDetail = data['currentEmployee'];
    });
  }

  goHomePage() {
    //Programmatically moving to a page
    //this.router.navigate(['/']);
    //this.router.navigate(['/employee']);
    this.router.navigate(['employee']);// This will be absolute path
    //this.router.navigate(['employee'], {relativeTo: this.actRouter }); // Failed here as it uses with relative to URL is  formed /employye/1/employees

  }


  authorize(): void{
    this.authService.setExitEmpDetaiRoute(true);
  }

}
