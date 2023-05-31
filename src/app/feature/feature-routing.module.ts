import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';

const routes: Routes = [
  {path: '', component: FeatureHomeComponent, pathMatch: 'full'},
  {path: 'feature', component: FeatureHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
