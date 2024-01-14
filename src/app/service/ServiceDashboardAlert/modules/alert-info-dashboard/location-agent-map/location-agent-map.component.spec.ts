import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';


import { LocationAgentMapComponent } from './location-agent-map.component';

describe('LocationAgentMapComponent', () => {
  let component: LocationAgentMapComponent;
  let fixture: ComponentFixture<LocationAgentMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAgentMapComponent ],
      imports:[GoogleMapsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAgentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnit', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
