import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DealerDefaultComponent } from './dealer-default.component';
import { DealerSharedModule } from '../../dealer-shared/dealer-shared.module';



@NgModule({
  declarations: [
    DealerDefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DealerSharedModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class DealerDefaultModule { }
