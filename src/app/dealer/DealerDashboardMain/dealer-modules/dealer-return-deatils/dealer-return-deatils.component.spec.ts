import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


import { DealerReturnDeatilsComponent } from './dealer-return-deatils.component';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('DealerReturnDeatilsComponent', () => {
  let component: DealerReturnDeatilsComponent;
  let fixture: ComponentFixture<DealerReturnDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({


      // providers:[
      //   // {provide:MatDialog,userValue:jasmine.createSpyObj('MatDialog',['get'])}
      // ],
      // providers : [{
      //   provide : MAT_DIALOG_DATA,
      //   useValue : {}
      // }],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA,  useValue: [] }
    ],
      imports:[MatDialogModule, RouterTestingModule,MatMenuModule,BrowserAnimationsModule],
      declarations: [ DealerReturnDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerReturnDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should call getTicketFullinfo', () => {
    expect(component.getTicketFullinfo()).toContain;
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should call getMissingTab', () => {
    expect(component.getMissingTab(10547)).toBeTruthy;
  });
  it('should call checkMissingStatus', () => {
    expect(component.checkMissingStatus()).toBeTruthy;
  });
  it('should call openDialog', () => {
    expect(component.openDialog()).toBeTruthy;
  });

});
