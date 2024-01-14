import { Component, Input, OnInit, ViewChild } from '@angular/core';
import ToolSetJson from './../../../../../../database/Tools/alltools.json';
import AllOrderJson from './../../../../../../database/Tools/allorder.json';
import * as Icommon from '../../../../../@common/@Interfaces/Icommon';
import { MatMenuTrigger } from '@angular/material/menu';
import { DatePipe, JsonPipe } from '@angular/common';
import { OrderUpdates } from './ordertrackerdetails.model';

export interface trackList {
  step1: Date;
  step2: Date;
  step3: Date;
  step4: Date;
  step5: Date;
  step6: Date;
}

export class OrderTracker {
  delivered: Number;
  readyToShipping: String;
  packagingToolSet: String;
  verificationCompleted: String;
  orderConfirmed: Number;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss'],
})
export class OrderTrackingComponent implements OnInit {

  @Input() orderId: String;
  orderTracker: OrderUpdates;
  // = {
  //   delivered: "",
  //   readyToShipping: "",
  //   packagingToolSet: "",
  //   verificationCompleted: "",
  //   orderConfirmed: ""
  // };
  delivered: string | number | Date;
  readyToShipping: String
  packagingToolSet: String
  verificationCompleted: String
  orderConfirmed: String;

  //checkList
  ToolsData: Icommon.ToolSet[] = ToolSetJson;
  selectedData!: String;
  Height = window.innerWidth;

  @ViewChild('myMenuTrigger')
  private readonly menuTrigger: MatMenuTrigger;


  circleIcon = './../../../../../assets/img/service/nullcircle.svg';
  proIcon = './../../../../../assets/img/service/fullcircle.svg';
  orderTrackerDate: number;
  somedate: string | null;
  geetha: string | null;


  constructor(private datePipe: DatePipe) { }

  getOrderUpdates(): void {
   // console.log(this.delivered)
    // if (this.delivered == undefined) {
    //   this.delivered = undefined
    // }
    if (this.readyToShipping == undefined) {
      this.readyToShipping = ''
    }
    if (this.packagingToolSet == undefined) {
      this.packagingToolSet = ''
    }
    if (this.verificationCompleted == undefined) {
      this.verificationCompleted = ''
    }
    if (this.orderConfirmed == undefined) {
      this.orderConfirmed = ''

    }
    console.log(this.orderConfirmed)
  }
  //date1: Date =  new Date("{{ orderTracker.delivered | date:dd.mm.yy }}");
  getOrderUpdatesData() {
   // this.delivered = this.datePipe.transform(Date.now().toLocaleString(), 'dd MMM YYY');

  }

  ngOnInit(): void {
    this.getOrderUpdates();
    this.getOrderUpdatesData
    //console.log(this.date1)
    //this.orderTracker.orderConfirmed =
    this.orderTrackerDate=Date.now();
    // console.log(this.datePipe.transform(Date.now()))
    //  this.somedate=this.datePipe.transform(Date.now());
    // this.geetha=this.datePipe.transform(this.somedate,'dd MM yyyy')
    /// this.orderTracker.verificationCompleted=this.geetha;
    // console.log("Agaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",this.orderTracker.verificationCompleted=JSON.stringify(this.datePipe.transform(Date.now())))
    // console.log("testiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",this.geetha)
    //this.orderTracker.verificationCompleted =this.datePipe.transform(Date.now());
    // this.orderTracker.orderConfirmed= date;
    //  this.orderTrackerDate=this.datePipe.transform(orderTracker,'dd MMM YYY')
    //   this.getOrderUpdates()
    //this.orderTracker.delivered=  Date.now();
    //console.log( this.orderTracker.delivered);
    //this.datePipe.transform(Date.now());

  }

  seletedData: Icommon.ToolSet[] = ToolSetJson;
  sComp!: Icommon.tools;
  sSet!: Icommon.ToolSet[];

  selctedList(e: any) {
    // console.log('hi');
    console.log(e);
    console.log(e.target.VerifiedDetails);
  }
  // getClass() {
  //   return '';
  // }
  public onCancel(): void {
    this.menuTrigger.closeMenu();
  }

  checkTools(sId: Number, cId: String, cName: String) {
    //this.selectedData = ' background-color: red;';
  }

}
