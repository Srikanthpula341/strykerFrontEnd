import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerDashboardChartComponent } from './dealer-dashboard-chart.component';

describe('DealerDashboardChartComponent', () => {
  let component: DealerDashboardChartComponent;
  let fixture: ComponentFixture<DealerDashboardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerDashboardChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerDashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
