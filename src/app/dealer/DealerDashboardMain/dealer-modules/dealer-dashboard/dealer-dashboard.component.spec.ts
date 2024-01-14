import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { DealerDashboardComponent } from './dealer-dashboard.component';

describe('DealerDashboardComponent', () => {
  let component: DealerDashboardComponent;
  let fixture: ComponentFixture<DealerDashboardComponent>;
  let ht: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule,MatTableModule,MatCardModule],
      declarations: [DealerDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DealerDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('component should have defined Cards values: Top card methods', () => {
    expect(component.cardValues).toBeDefined();
  });
  it('component should have NgOnit', () => {
    expect(component.ngOnInit).toBeDefined();
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
      it('After onlit for table sorting data for accordion method', () => {
        expect(component.ngAfterViewInit).toBeDefined();
      });
      // it('filtering for table', () => {
      //   expect(component.applyFilter(history.scrollRestoration)).toEqual("");
      // });
    //   it('order list item status color test for green', () => {
    //     expect(component.getStatusColor('InStock')).toMatch('red');
    //   });
  });

});
