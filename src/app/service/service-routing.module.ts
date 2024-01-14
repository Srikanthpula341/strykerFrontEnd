import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './ServiceDashboardAlert/layouts/default/default.component';
import { AlertInfoDashboardComponent } from './ServiceDashboardAlert/modules/alert-info-dashboard/alert-info-dashboard.component';
import { DashboardComponent } from './ServiceDashboardAlert/modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:
      [
        {
          path: '',
          component: DashboardComponent
        },
        { path: 'service', redirectTo: 'service', pathMatch: 'full' },
        {
          path: 'alertinfo',
          component: AlertInfoDashboardComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
