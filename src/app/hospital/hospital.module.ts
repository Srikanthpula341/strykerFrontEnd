import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitaldashboardComponent } from './hospitaldashboard/hospitaldashboard.component';


@NgModule({
  declarations: [
    HospitaldashboardComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ]
})
export class HospitalModule { }
