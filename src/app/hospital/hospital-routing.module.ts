import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitaldashboardComponent } from './hospitaldashboard/hospitaldashboard.component';

const routes: Routes = [
  { path: '', component: HospitaldashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
