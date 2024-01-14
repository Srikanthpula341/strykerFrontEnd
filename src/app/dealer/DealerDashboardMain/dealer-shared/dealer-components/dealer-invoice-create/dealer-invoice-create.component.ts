import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dealer-invoice-create',
  templateUrl: './dealer-invoice-create.component.html',
  styleUrls: ['./dealer-invoice-create.component.scss']
})


export class DealerInvoiceCreateComponent implements OnInit {
  invoiceFormGroup!:FormGroup;
  invoiceCreate:any;
  invoiceDetails:any;
invoiceForm = this.formBuilder.group({
    customer: '',
    ticketNo: '',
    discount:''
  });

  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog) {

      this.invoiceFormGroup = this.formBuilder.group({
        customer:['',Validators.required],
        ticketNo:['',Validators.required],



      });
    }
  // customer=""
  // discount=""
  createInvoice=()=>{

    this.invoiceForm.value.ticketNo = (Math.round(Math.random()*1000+1000)).toString();
    console.log(this.invoiceForm.value)
    this.invoiceDetails =this.invoiceForm.value.customer +" invoice for #"+this.invoiceForm.value.ticketNo
    console.log('Successfully submitted')
  }


  ngOnInit(): void {
    // this.invoiceCreate={
    //   customer:this.invoiceFormGroup.controls['customer'].value,
    //   ticketNo:this.invoiceFormGroup.controls['ticketNo'].value

    // }


  }

}

