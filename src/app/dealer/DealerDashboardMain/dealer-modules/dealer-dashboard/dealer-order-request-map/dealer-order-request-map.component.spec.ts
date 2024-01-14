import { GoogleMapsModule } from '@angular/google-maps';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DealerOrderRequestMapComponent } from './dealer-order-request-map.component';

describe('DealerOrderRequestMapComponent', () => {
  let component: DealerOrderRequestMapComponent;
  let fixture: ComponentFixture<DealerOrderRequestMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[GoogleMapsModule],
      declarations: [DealerOrderRequestMapComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DealerOrderRequestMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
