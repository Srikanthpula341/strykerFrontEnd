import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighchartsChartModule } from 'highcharts-angular';

import { UsagetrendbarComponent } from './usagetrendbar.component';

describe('UsagetrendbarComponent', () => {
  let component: UsagetrendbarComponent;
  let fixture: ComponentFixture<UsagetrendbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagetrendbarComponent ],
      imports:[HighchartsChartModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagetrendbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should create chartOptions', () => {
    expect(component.chartOptions).toBeTruthy();
  });
  it('should create Highcharts', () => {
    expect(component.Highcharts).toContain;
  });
  

});
