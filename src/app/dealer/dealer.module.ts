import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerRoutingModule } from './dealer-routing.module';
import { DatePipe } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { DealerDefaultModule } from './DealerDashboardMain/dealer-layouts/dealer-default/dealer-default.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DealerRoutingModule,
    MatSidenavModule,
    GoogleMapsModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule,
    //DealerSharedModule,
    DealerDefaultModule
  ],
  providers:[DatePipe]
})
export class DealerModule { }
