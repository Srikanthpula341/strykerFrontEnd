import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./service/service.module').then((m) => m.ServiceModule),
  },
  {
    path: 'hospital',
    loadChildren: () =>
      import('./hospital/hospital.module').then((m) => m.HospitalModule),
  },
  {
    path: 'dealer',
    loadChildren: () =>
      import('./dealer/dealer.module').then((m) => m.DealerModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
