import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

//Component
import { LocationAgentMapComponent } from '../modules/alert-info-dashboard/location-agent-map/location-agent-map.component';
import { ClickOutsideDirective } from '../modules/dashboard/clickOutside';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AlertInfoDashboardComponent } from '../modules/alert-info-dashboard/alert-info-dashboard.component';
import { AlertsidebarComponent } from './components/alertsidebar/alertsidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { PopupwindowComponent } from '../modules/alert-info-dashboard/popupwindow/popupwindow.component';
import { ServicemapComponent } from '../modules/servicemap/servicemap.component';
import { TicketstatscardComponent } from '../modules/ticketstatscard/ticketstatscard.component';
import { UsagetrendbarComponent } from '../modules/usagetrendbar/usagetrendbar.component';
//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
//otherModule
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
//Service
import { EventEmitterService } from '../service.ts/event-emitter.service';
import { PipeModule } from '../pipes/pipe.module';
//Directives

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    AlertsidebarComponent,
    DashboardComponent,
    AlertInfoDashboardComponent,
    ServicemapComponent,
    TicketstatscardComponent,
    ClickOutsideDirective,
    PopupwindowComponent,
    UsagetrendbarComponent,
    LocationAgentMapComponent,
  ],
  imports: [
    PipeModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    GoogleMapsModule,
    MatPaginatorModule,
    MatTableModule,
    HighchartsChartModule,
    AgGridModule,
    // MatDialogModule,
    MatSortModule,
    MatListModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDividerModule,
  ],
  providers:[DatePipe,EventEmitterService],
  exports: [
    HeaderComponent,
    SidenavComponent,
    AlertsidebarComponent,
    DashboardComponent,
    ServicemapComponent,
    AlertInfoDashboardComponent,
    UsagetrendbarComponent,
  ]
})
export class SharedModule { }
