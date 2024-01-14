import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { filter } from 'lodash';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { PipeModule } from '../../../pipes/pipe.module';

import { AlertsidebarComponent } from './alertsidebar.component';

describe('AlertsidebarComponent', () => {
  let component: AlertsidebarComponent;
  let fixture: ComponentFixture<AlertsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsidebarComponent ],
      imports:[PipeModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should call getSortValue', () => {
  //   expect(component.getSortValue()).toBeTruthy();
  // });

  it('should call ticket data', fakeAsync(() => {
    spyOn(component, 'gettingticketData').and.callThrough(); 
    component.gettingticketData(1,"Hospital","1","1234512341");   
    expect(component.gettingticketData).toHaveBeenCalled();
  }));

  it('should call toggleCollapse', fakeAsync(() => {
    spyOn(component, 'toggleCollapse').and.callThrough(); 
    component.toggleCollapse();   
    expect(component.toggleCollapse).toHaveBeenCalled();
  }));

  it('should call selectChangeHandler', fakeAsync(() => {
    spyOn(component, 'selectChangeHandler').and.callThrough(); 
    component.selectChangeHandler(event);   
    expect(component.selectChangeHandler).toHaveBeenCalled();
  }));

  it('should call selectChangeHandler', fakeAsync(() => {
    spyOn(component, 'onResize').and.callThrough(); 
    component.onResize(event);   
    expect(component.onResize).toHaveBeenCalled();
  }));

});
