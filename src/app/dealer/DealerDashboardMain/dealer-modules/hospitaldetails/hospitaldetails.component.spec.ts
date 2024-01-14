import { MatButtonModule } from '@angular/material/button';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { HospitaldetailsComponent } from './hospitaldetails.component';

describe('HospitaldetailsComponent', () => {
  let component: HospitaldetailsComponent;
  let fixture: ComponentFixture<HospitaldetailsComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatTableModule, MatMenuModule, MatPaginatorModule, BrowserAnimationsModule, MatSortModule, MatCardModule, MatIconModule,MatButtonModule],
      declarations: [HospitaldetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HospitaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('with rendered rows with right number of row cells', () => {
    fixture.detectChanges();

    // query debug elements doesn't work
    const rowDebugElements = de.queryAll(By.css('mat-cell'));
    expect(rowDebugElements.length).toBe(54);
    // has to fallback to query DOM elements
    const rowHtmlElements = de.nativeElement.querySelectorAll('mat-cell');
    expect(rowHtmlElements.length).toBe(54);
  });



  it('should has correct rows', () => {
    fixture.detectChanges();

    // query debug elements doesn't work
    const rowDebugElements = de.queryAll(By.css('mat-header-cell'));
    expect(rowDebugElements.length).toBe(6);
    // has to fallback to query DOM elements
    const rowHtmlElements = de.nativeElement.querySelectorAll('mat-header-cell');
    expect(rowHtmlElements.length).toBe(6);
  });

  it('initially sets up sorting', () => {
    // Call `TableSortingExample#ngOnInit`
    fixture.detectChanges();

    const sort = component.dataSource.sort;
    expect(sort).toBeInstanceOf(MatSort);
  });


  it('background should have correct color', () => {

    fixture.detectChanges();

    const e = fixture.debugElement.query(By.css(".card")).nativeElement;

    expect(getComputedStyle(e).backgroundColor).toEqual('rgb(255, 255, 255)');

  });





});


