import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureHomeComponent } from './feature-home/feature-home.component';


@NgModule({
  declarations: [
    FeatureHomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
