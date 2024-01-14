import { DatePipe } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingComponent } from './order-tracking.component';
import { By } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

describe('OrderTrackingComponent', () => {
  let component: OrderTrackingComponent;
  let fixture: ComponentFixture<OrderTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        CdkAccordionModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        MatButtonModule,
        MatAccordion,
        MatExpansionModule
      ],
      providers: [DatePipe],
      declarations: [OrderTrackingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OrderTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create order tracking component', () => {
    expect(component).toBeTruthy();
  });
  describe('Html -CSS Elements Testing', () => {
    it('should had card border-color #284b7508', () => {
      const ele = fixture.debugElement.query(By.css('.card')).nativeElement;
      expect(getComputedStyle(ele).borderColor).toBe('rgba(40, 75, 117, 0.03)');
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
  describe('Functions invoking', () => {
    it('calls Close Menu on Cancel', () => {
      const menuTigger: MatMenuTrigger = fixture.debugElement.query(By.directive(MatMenuTrigger)).injector.get(MatMenuTrigger);
      spyOn(menuTigger, 'closeMenu');
      component.onCancel();
      expect(menuTigger.closeMenu).toHaveBeenCalledTimes(1);
    });

  })

  describe('Method declarations', () => {
    it('onInitial Method defined', () => {
      expect(component.ngOnInit).toBeDefined();
    });
    // it('selected list method', () => {
    //   expect(component.selctedList(0)).toBeDefined();
    // });
    it('more options close', () => {
      expect(component.onCancel).toBeDefined();
    });
    // it('order list item status color test for green', () => {
    //   expect(component.checkTools(0,"1201","450")).toBeDefined();
    // });
  });



});
