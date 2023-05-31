import { Auth3Guard } from './auth3.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmpService } from './emp.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmpregistryComponent } from './empregistry/empregistry.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component:  HomeComponent, pathMatch:'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'registry', canDeactivate:[AuthGuard], component:  EmpregistryComponent},//
  { path: 'employee',  canActivate: [AuthGuard, Auth3Guard], canActivateChild: [AuthGuard], component:  EmployeeComponent //
      ,children: [
        { path: ':id',  component:  EmpDetailComponent ,
          resolve: {
                 currentEmployee : EmpService
           }
        }
      ]
  },

   //{ path: 'employee/:id',  component:  EmpDetailComponent},// CanActivate individually
  // { path: 'employee/:id',  canDeactivate:[AuthGuard], component:  EmpDetailComponent}, //Original
  // { path: 'employee/:id',  canDeactivate:[AuthGuard], component:  EmpDetailComponent,
  //     resolve: {
  //       currentEmployee : EmpService
  //     }
  // }, // With Resolve
  {path:"feature", canLoad: [Auth3Guard], loadChildren:() =>  import("./feature/feature.module").then( m => m.FeatureModule ) } ,  //canActivate:[AuthGuard], canLoad: [Auth2Guard],

  { path: '**', component:  NotFoundComponent, data: {message: 'Invalid URL entered. Please check the URL....'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
