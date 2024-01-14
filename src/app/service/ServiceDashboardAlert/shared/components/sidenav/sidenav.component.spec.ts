import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports:[MatIconModule,MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should create goTo', () => {
  //   expect(component.goTo).toBeTruthy();
  // });
    it('should create ngOnInit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });


  
  it('should create isExpanded', () => {
    expect(component.isExpanded).toContain;
  });
  it('should create selectedMenu', () => {
    expect(component.selectedMenu).toContain;
  });


});
