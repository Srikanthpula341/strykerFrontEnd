import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { TicketstatscardComponent } from './ticketstatscard.component';

describe('TicketstatscardComponent', () => {
  let component: TicketstatscardComponent;
  let fixture: ComponentFixture<TicketstatscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketstatscardComponent ],
      imports: [
        MatMenuModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketstatscardComponent);
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
