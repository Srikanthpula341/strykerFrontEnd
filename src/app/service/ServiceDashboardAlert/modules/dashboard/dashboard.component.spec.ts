import { MatMenuModule } from '@angular/material/menu';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {  GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { ServicemapComponent } from '../servicemap/servicemap.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ServiceModule } from 'src/app/service/service.module';
import { TicketstatscardComponent } from '../ticketstatscard/ticketstatscard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule,GoogleMapsModule,MatIconModule,MatCardModule, MatTableModule,MatPaginatorModule],
      declarations: [ DashboardComponent,TicketstatscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should call ngAfterViewInit', () => {
    expect(component.ngAfterViewInit).toBeTruthy();
  });
  it('should call applyFilter', () => {
    expect(component.applyFilter).toBeTruthy();
  });
});
