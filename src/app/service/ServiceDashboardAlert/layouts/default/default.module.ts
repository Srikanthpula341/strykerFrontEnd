import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { DefaultComponent } from './default.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    MatSidenavModule
  ]
})
export class DefaultModule { }
