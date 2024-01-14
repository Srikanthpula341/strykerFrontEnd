import { OrderListComponent } from './order-list/order-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerOrderDetailsComponent } from './dealer-order-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

describe('DealerOrderDetailsComponent', () => {
  let component: DealerOrderDetailsComponent;
  let fixture: ComponentFixture<DealerOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatMenuModule,MatCardModule,FormsModule,MatTabsModule,MatIconModule,OrderListComponent],
      declarations: [ DealerOrderDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should create', () => {
  //   expect(component.ngOnInit).toBeTruthy();
  // });
});
