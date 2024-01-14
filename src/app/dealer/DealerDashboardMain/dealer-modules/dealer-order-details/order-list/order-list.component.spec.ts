import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './order-list.component';
import { By } from '@angular/platform-browser';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  var originalTimeout: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CdkAccordionModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        MatButtonModule,
        MatAccordion,
        MatExpansionModule,
      ],
      declarations: [OrderListComponent],
    }).compileComponents();
    // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(async () => {
    await TestBed.resetTestingModule();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  describe('Html -CSS Elements Testing', () => {
    it('should had card border-color #284b7508', () => {
      const ele = fixture.debugElement.query(By.css('.card')).nativeElement;
      expect(getComputedStyle(ele).borderColor).toBe('rgba(40, 75, 117, 0.03)');
    });
    it('export button should have yellow color',()=>{
      const ele = fixture.debugElement.query(By.css('.btn-export')).nativeElement;
      expect(getComputedStyle(ele).background).toBe('rgb(255, 166, 0) none repeat scroll 0% 0% / auto padding-box border-box');
    })
    //order-checklist-head
    it('order list heading as dark blue color heading',()=>{
      const ele = fixture.debugElement.query(By.css('.order-checklist-head')).nativeElement;
      expect(getComputedStyle(ele).color).toBe('rgb(19, 68, 105)');
    })
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
    it('rendereing data for accordion method', () => {
      expect(component.getDataSource(0)).toBeDefined();
    });
    it('order list item status color test for red', () => {
      expect(component.getStatusColor('Stock')).toMatch('green');
    });
    it('order list item status color test for green', () => {
      expect(component.getStatusColor('InStock')).toMatch('red');
    });
  });
});
