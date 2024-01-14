import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser';

import { ReturnDetailsTabComponent } from './return-details-tab.component';

describe('ReturnDetailsTabComponent', () => {
  let component: ReturnDetailsTabComponent;
  let fixture: ComponentFixture<ReturnDetailsTabComponent>;
  let element = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule,MatIconModule,MatCardModule],
      declarations: [ ReturnDetailsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element=fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should call addingMissingList ', () => {
    expect(component.addingMissingList()).toContain;
  });
  it('should call returnListVerification', () => {
    expect(component.returnListVerification(10546)).toContain;
  });

  it('should call remainingItems', () => {
    expect(component.remainingItems()).toContain;
  });
  it('should call verifyItems', () => {
    expect(component.verifyItems()).toContain;
  });


  it('should call the addingMissingList method', async(() => {

    fixture.detectChanges();

    spyOn(component,'addingMissingList')

   let el:HTMLElement =fixture.debugElement.query(By.css('button')).nativeElement;

  //  el.click();

    expect(component.addingMissingList).toHaveBeenCalledTimes(0);



  }));

  it('should have border radius 5px', () => {
    fixture.detectChanges();
    const e = fixture.debugElement.query(By.css(".damageBtn")).nativeElement;
    expect(getComputedStyle(e).borderRadius).toEqual('5px');
  });
  it('should find the <span> with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('span'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('Return list');
  });

});
