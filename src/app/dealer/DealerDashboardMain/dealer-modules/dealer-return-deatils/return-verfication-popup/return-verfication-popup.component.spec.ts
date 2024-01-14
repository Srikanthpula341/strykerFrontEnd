import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ReturnVerficationPopupComponent } from './return-verfication-popup.component';

describe('ReturnVerficationPopupComponent', () => {
  let component: ReturnVerficationPopupComponent;
  let fixture: ComponentFixture<ReturnVerficationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [{
        provide : MAT_DIALOG_DATA,
        useValue : {}
      }],

      declarations: [ ReturnVerficationPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnVerficationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
