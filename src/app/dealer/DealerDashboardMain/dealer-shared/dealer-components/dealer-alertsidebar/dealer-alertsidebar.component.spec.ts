import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../../../pipes/filter.pipe';

import { DealerAlertsidebarComponent } from './dealer-alertsidebar.component';

describe('DealerAlertsidebarComponent', () => {
  let component: DealerAlertsidebarComponent;
  let fixture: ComponentFixture<DealerAlertsidebarComponent>;
 
  let router: Router;
 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[ RouterTestingModule.withRoutes([])],
      declarations: [ DealerAlertsidebarComponent,FilterPipe ],
      providers:[FilterPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerAlertsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router); 
  });




  it('should call toggle collapse when clicked', fakeAsync(() => {
    spyOn(component, 'toggleCollapse').and.callThrough(); 
    component.toggleCollapse();   
    expect(component.toggleCollapse).toHaveBeenCalled();
  }));

  it('should call resize when clicked', fakeAsync(() => {
    spyOn(component, 'onResize').and.callThrough(); 
    component.onResize(event);  
    expect(component.onResize).toHaveBeenCalled();
  }));

  // it('should call getting ticket data', fakeAsync(() => {


  //   spyOn(component, 'gettingticketData').and.callThrough(); 
  //   component.gettingticketData(10211,'Order','New'); 
  //   expect(component.gettingticketData).toHaveBeenCalled();
  // }));

  
  it('should navigate', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.gettingticketData(10211,'Order','New','1');;
    expect(navigateSpy).toHaveBeenCalledWith(['/dealer/request/order','10211'], Object({ queryParams: Object({ type: 'order', id: '10211' ,customerId:'1'})}));
});



  describe('ArrayFilterPipe', () => {
    const pipe = new FilterPipe();

    const dummyData = [
        { id: 1, name: 'Order' },
        { id: 2, name: 'Return' },
    ];

    it('the keyword "Return" should return 0 results', () => {
        expect(pipe.transform(dummyData,'Return').length).toEqual(0);
    });


 });


  describe('Html -CSS Elements Testing', () => {
    it('should had card border-color #284b7508', () => {
      const ele = fixture.debugElement.query(By.css('.ticketid')).nativeElement;
      expect(getComputedStyle(ele).backgroundColor).toBe('rgba(255, 143, 0, 0.2)');
    });
  });

});
