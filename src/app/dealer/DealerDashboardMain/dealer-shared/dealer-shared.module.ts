import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from '../pipes/filter.pipe';

import { DealerDashboardComponent } from '../dealer-modules/dealer-dashboard/dealer-dashboard.component';
//import { DealerOrderRequestMapComponent } from '../dealer-modules/dealer-dashboard/dealer-order-request-map/dealer-order-request-map.component';
import { DealerAlertsidebarComponent } from './dealer-components/dealer-alertsidebar/dealer-alertsidebar.component';
import { DealerHeaderComponent } from './dealer-components/dealer-header/dealer-header.component';
import { DealerSidenavComponent } from './dealer-components/dealer-sidenav/dealer-sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DealerOrderRequestMapComponent } from '../dealer-modules/dealer-dashboard/dealer-order-request-map/dealer-order-request-map.component';
import { DealerOrderDetailsComponent } from '../dealer-modules/dealer-order-details/dealer-order-details.component';
import { DealerDashboardChartComponent } from '../dealer-modules/dealer-dashboard/dealer-dashboard-chart/dealer-dashboard-chart.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DealerReturnDeatilsComponent } from '../dealer-modules/dealer-return-deatils/dealer-return-deatils.component';
import { DealerInvoiceCreateComponent } from './dealer-components/dealer-invoice-create/dealer-invoice-create.component';
import { ReturnVerficationPopupComponent } from '../dealer-modules/dealer-return-deatils/return-verfication-popup/return-verfication-popup.component';
import { DealerHomepageComponent } from './dealer-components/dealer-homepage/dealer-homepage.component';
import { OrderListComponent } from '../dealer-modules/dealer-order-details/order-list/order-list.component';
import { MatSelectModule } from '@angular/material/select';
import { OrderTrackingComponent } from '../dealer-modules/dealer-order-details/order-tracking/order-tracking.component';
import { ReturnTrackingComponent } from '../dealer-modules/dealer-return-deatils/return-tracking/return-tracking.component';
import { HospitaldetailsComponent } from '../dealer-modules/hospitaldetails/hospitaldetails.component';
import { ReturnDetailsTabComponent } from '../dealer-modules/dealer-return-deatils/return-details-tab/return-details-tab.component';
import { MissingDetailsTabComponent } from '../dealer-modules/dealer-return-deatils/missing-details-tab/missing-details-tab.component';
import { DatePipe } from '@angular/common';



@NgModule({
    declarations: [
        FilterPipe,
        DealerAlertsidebarComponent,
        DealerHeaderComponent,
        DealerSidenavComponent,
        DealerDashboardComponent,
        DealerOrderRequestMapComponent,
        DealerInvoiceCreateComponent,
        DealerOrderDetailsComponent,
        DealerDashboardChartComponent,
        DealerReturnDeatilsComponent,
        ReturnVerficationPopupComponent,
        DealerHomepageComponent,
        OrderListComponent,
        OrderTrackingComponent,
        ReturnTrackingComponent,
        HospitaldetailsComponent,
        ReturnDetailsTabComponent,
        MissingDetailsTabComponent,
        //ConsumableTableComponent
    ],
    providers: [DatePipe],
    exports: [
        DealerAlertsidebarComponent,
        DealerHeaderComponent,
        DealerSidenavComponent,
        DealerDashboardComponent,
        DealerInvoiceCreateComponent,
        DealerOrderRequestMapComponent,
        DealerOrderDetailsComponent,
        DealerReturnDeatilsComponent,
        DealerHomepageComponent,
        OrderListComponent,
        OrderTrackingComponent,
        ReturnTrackingComponent,
        HospitaldetailsComponent,
        ReturnDetailsTabComponent,
        MissingDetailsTabComponent,
    ],
    imports: [
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
        MatSelectModule,
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
        MatDialogModule,
        MatSortModule,
        MatListModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatDividerModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatMenuModule,
        // MatButtonModule
        CdkAccordionModule,
       
    ]
})
export class DealerSharedModule {}
