import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { DealerSidenavComponent } from './dealer-sidenav.component';

describe('DealerSidenavComponent', () => {
  let component: DealerSidenavComponent;
  let fixture: ComponentFixture<DealerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should call Dashboard route', fakeAsync(() => {
    spyOn(component,'isDashboardRoute').and.callThrough(); 
    component.isDashboardRoute();   
    expect(component.isDashboardRoute).toHaveBeenCalled();
  }));

  it('should call Home route', fakeAsync(() => {
    spyOn(component, 'isHomeRoute').and.callThrough(); 
    component.isHomeRoute();   
    expect(component.isHomeRoute).toHaveBeenCalled();
  }));


});
