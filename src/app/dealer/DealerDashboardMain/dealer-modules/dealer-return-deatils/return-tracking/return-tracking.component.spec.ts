import { MatMenuModule } from '@angular/material/menu';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTrackingComponent } from './return-tracking.component';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('ReturnTrackingComponent', () => {
  let component: ReturnTrackingComponent;
  let fixture: ComponentFixture<ReturnTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule, FormsModule],
      providers:[DatePipe],
      declarations: [ ReturnTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Html -CSS Elements Testing', () => {
    it('should had card border-color #284b7508', () => {
      const ele = fixture.debugElement.query(By.css('.card')).nativeElement;
      expect(getComputedStyle(ele).borderColor).toBe('rgb(209, 217, 224)');
    });
    // it('export button should have yellow color',()=>{
    //   const ele = fixture.debugElement.query(By.css('.btn-export')).nativeElement;
    //   expect(getComputedStyle(ele).background).toBe('rgb(255, 166, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    // })
    // //order-checklist-head
    // it('export button should have yellow color',()=>{
    //   const ele = fixture.debugElement.query(By.css('.order-checklist-head')).nativeElement;
    //   expect(getComputedStyle(ele).color).toBe('rgb(19, 68, 105)');
    // })
  });
  // describe('Functions invoking', () => {
  //   it('calls Close Menu on Cancel', () => {
  //     const menuTigger: MatMenuTrigger = fixture.debugElement.query(By.directive(MatMenuTrigger)).injector.get(MatMenuTrigger);
  //     spyOn(menuTigger, 'closeMenu');
  //     component.onCancel();
  //     expect(menuTigger.closeMenu).toHaveBeenCalledTimes(1);
  //   });

  // })

  describe('Method declarations', () => {
    it('onInitial Method defined', () => {
      expect(component.ngOnInit).toBeDefined();
    });
    it('check list method', () => {
      expect(component.checkTools(121,"124","124")).toMatch("");
    });
    // it('more options close', () => {
    //   expect(component.onCancel).toBeDefined();
    // });
    // it('order list item status color test for green', () => {
    //   expect(component.checkTools(0,"1201","450")).toBeDefined();
    // });
  });

});
