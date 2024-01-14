import { MatMenuModule } from '@angular/material/menu';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MissingDetailsTabComponent } from './missing-details-tab.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('MissingDetailsTabComponent', () => {
  let component: MissingDetailsTabComponent;
  let fixture: ComponentFixture<MissingDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule,MatIconModule,MatCardModule],
      declarations: [ MissingDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should call returnListVerification ', () => {
    expect(component.returnListVerification(10547)).toContain;
  });
  it('should have green background', () => {
    const e = fixture.debugElement.query(By.css(".verifiedCountMissingList")).nativeElement;
    expect(getComputedStyle(e).borderColor).toEqual('rgb(33, 213, 155)');
  });
  it('should have border radius 5px', () => {
    const e = fixture.debugElement.query(By.css(".writeOffBtn")).nativeElement;
    expect(getComputedStyle(e).borderRadius).toEqual('5px');
  });
});
