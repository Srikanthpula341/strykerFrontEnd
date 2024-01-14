import { DealerSidenavComponent } from './DealerDashboardMain/dealer-shared/dealer-components/dealer-sidenav/dealer-sidenav.component';
import { DealerOrderDetailsComponent } from './DealerDashboardMain/dealer-modules/dealer-order-details/dealer-order-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DealerInvoiceCreateComponent } from './dealer-shared/dealer-components/dealer-invoice-create/dealer-invoice-create.component';
import { DealerDefaultComponent } from './DealerDashboardMain/dealer-layouts/dealer-default/dealer-default.component';
import { DealerDashboardComponent } from './DealerDashboardMain/dealer-modules/dealer-dashboard/dealer-dashboard.component';
import { DealerReturnDeatilsComponent } from './DealerDashboardMain/dealer-modules/dealer-return-deatils/dealer-return-deatils.component';
//import { AlertsidebarComponent } from '../service/ServiceDashboardAlert/shared/components/alertsidebar/alertsidebar.component';
import { DealerAlertsidebarComponent } from './DealerDashboardMain/dealer-shared/dealer-components/dealer-alertsidebar/dealer-alertsidebar.component';
import { DealerInvoiceCreateComponent } from './DealerDashboardMain/dealer-shared/dealer-components/dealer-invoice-create/dealer-invoice-create.component';
import { AlertsidebarComponent } from '../service/ServiceDashboardAlert/shared/components/alertsidebar/alertsidebar.component';
import { ReturnDetailsTabComponent } from './DealerDashboardMain/dealer-modules/dealer-return-deatils/return-details-tab/return-details-tab.component';
import { MissingDetailsTabComponent } from './DealerDashboardMain/dealer-modules/dealer-return-deatils/missing-details-tab/missing-details-tab.component';
//import { DealerOrderDetailsComponent } from './DealerDashboardMain/dealer-modules/dealer-order-details/dealer-order-details.component';

const routes: Routes = [
  {
    path: '',
    component: DealerDefaultComponent,
    children: [
      {
        path: 'invoice',
        component: DealerInvoiceCreateComponent,
      },
      {
        path: 'request',
        component: DealerAlertsidebarComponent,
        children: [
          // { path: 'dashboard', redirectTo: 'dealer/dashboard', pathMatch: 'full' },
          {
            path: 'dashboard',
            component: DealerDashboardComponent,
          },
          {
            path: 'dashboard',
            redirectTo: 'dealer/request/dashboard',
            pathMatch: 'full',
          },
          {
            path: 'order/:id',
            component: DealerOrderDetailsComponent,
          },
          {
            path: 'return/:id',
            component: DealerReturnDeatilsComponent,
          },
          {
            path: 'missingTab',
            component: MissingDetailsTabComponent,
          },

        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerRoutingModule {}
