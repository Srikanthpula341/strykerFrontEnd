import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
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
});
