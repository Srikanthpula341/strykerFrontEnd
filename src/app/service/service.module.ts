import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceRoutingModule } from './service-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoogleMapsModule } from '@angular/google-maps';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DefaultModule } from './ServiceDashboardAlert/layouts/default/default.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatSidenavModule,
    GoogleMapsModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    // SharedModule,
    DefaultModule
  ],
})
export class ServiceModule { }
