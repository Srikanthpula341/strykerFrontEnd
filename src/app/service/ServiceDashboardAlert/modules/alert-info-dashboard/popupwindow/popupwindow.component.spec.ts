import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupwindowComponent } from './popupwindow.component';

describe('PopupwindowComponent', () => {
  let component: PopupwindowComponent;
  let fixture: ComponentFixture<PopupwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupwindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  // it('should call onNoClick', () => {
  //   expect(component.assigningAgent()).toContain;
  // });

});
