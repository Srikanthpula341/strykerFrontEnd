import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DealerInvoiceCreateComponent } from './dealer-invoice-create.component';

describe('DealerInvoiceCreateComponent', () => {
  let component: DealerInvoiceCreateComponent;
  let fixture: ComponentFixture<DealerInvoiceCreateComponent>;
  let element = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: FormBuilder,
          userValue: jasmine.createSpyObj('FormBuilder', ['get']),
        },
      ],
      declarations: [DealerInvoiceCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerInvoiceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    element=fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('component should have defined formGroup: invoiceForm', () => {
    expect(component.invoiceForm).toBeDefined();
  });
  // it('TEST a Form Group ELEMENT COUNT', () => {
  //   const formElement =
  //     fixture.debugElement.nativeElement.querySelector('#invoiceForm');
  //   const inputElements = formElement.querySelectorAll('input');
  //   expect(inputElements.length).toEqual(5);
  // });
  it('should have form validation', () => {
    const createInvoiceForm = component.invoiceForm;
    const invoiceFormValues = {
      customer: '',
      discount: '',
      ticketNo: '',
    };
    expect(createInvoiceForm.value).toEqual(invoiceFormValues);
  });

  // it('should have a form with class invoice-form', () => {
  //   // Arrange & Assert
  //   const el = fixture.debugElement.query(By.css('form.invoice-form'));
  //   expect(el).toBeTruthy();
  // });

  it('component should have NgOnit', () => {

    expect(component.createInvoice).toBeDefined();

  });

  it('should call createInvoice ', () => {
    expect(component.createInvoice()).toContain;
  });
  
  it('should call the createInvoice method', async(() => {

    fixture.detectChanges();

    spyOn(component,'createInvoice')

   let el:HTMLElement =fixture.debugElement.query(By.css('button')).nativeElement;

  //  el.click();

    expect(component.createInvoice).toHaveBeenCalledTimes(0);

    //('title').textContent).toContain('Dashboard');

  }));


});
