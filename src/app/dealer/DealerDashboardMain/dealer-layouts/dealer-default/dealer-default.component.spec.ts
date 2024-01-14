import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerDefaultComponent } from './dealer-default.component';

describe('DealerDefaultComponent', () => {
  let component: DealerDefaultComponent;
  let fixture: ComponentFixture<DealerDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
