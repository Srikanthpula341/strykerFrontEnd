import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpageComponent ],
      imports:[ReactiveFormsModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should handle login', fakeAsync(() => {
    spyOn(component, 'handleLoginClick').and.callThrough(); 
    component.handleLoginClick();   
    expect(component.handleLoginClick).toHaveBeenCalled();
  }));

  it('should authenticate users', fakeAsync(() => {
    spyOn(component, 'authenticateUser').and.callThrough(); 
    component.authenticateUser("service","service@1");   
    expect(component.authenticateUser).toHaveBeenCalled();
  }));
});
