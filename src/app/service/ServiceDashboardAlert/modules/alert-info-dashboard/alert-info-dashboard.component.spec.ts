import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { AlertInfoDashboardComponent } from './alert-info-dashboard.component';

describe('AlertInfoDashboardComponent', () => {
  let component: AlertInfoDashboardComponent;
  let fixture: ComponentFixture<AlertInfoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [ AlertInfoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertInfoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
