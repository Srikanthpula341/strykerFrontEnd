import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerHomepageComponent } from './dealer-homepage.component';

describe('DealerHomepageComponent', () => {
  let component: DealerHomepageComponent;
  let fixture: ComponentFixture<DealerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
