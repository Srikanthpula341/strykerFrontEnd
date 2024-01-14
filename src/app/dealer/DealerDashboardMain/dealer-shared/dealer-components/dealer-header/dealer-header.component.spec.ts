import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

import { DealerHeaderComponent } from './dealer-header.component';

describe('DealerHeaderComponent', () => {
  let component: DealerHeaderComponent;
  let fixture: ComponentFixture<DealerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule],
      declarations: [ DealerHeaderComponent ],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });



  it('should call toggle sidebar when clicked', fakeAsync(() => {
    spyOn(component, 'ToggleSidebar').and.callThrough(); 
    component.ToggleSidebar();   
    expect(component.ToggleSidebar).toHaveBeenCalled();
  }));

  
  // it('should call toggle button click', fakeAsync(() => {
  //   spyOn(component, 'btnClick').and.callThrough(); 
  //   component.btnClick();   
  //   expect(component.btnClick).toHaveBeenCalled();
  // }));
});
