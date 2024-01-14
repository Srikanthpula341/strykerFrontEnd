import dealeralertStatusData from '../../../../../database/dealer/dealer-alert.json';

import * as _ from 'lodash';
import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import returnDetailsList from '../../../../../database/dealer/returnDetails.json';
import verifiedDetailsList from '../../../../../database/dealer/verifiedDetails.json';

import ToolSetJson from './../../../../../database/Tools/alltools.json';
import { MatDialog } from '@angular/material/dialog';
import { ReturnVerficationPopupComponent } from './return-verfication-popup/return-verfication-popup.component';
import { ActivatedRoute, Router } from '@angular/router';

export interface tools {
  name: string;
  code: string;
  slno: number;
  qty: number;
}

export interface ToolSet {
  name: string;
  id: number;
  tools: tools[];
}

export interface dealeralertStatus {
  id: number;
  alertstatus: string;
  ticketid: string;
  ticketstatus: string;
  alertheading: string;
  prioritystatus: string;
  ordereditemno: string;
  request: string;
  type:string;
  doctorsname:string;
  hospitalname:string;
}



export interface ReturnDetails {
  id: String;
  deviceName: String;
  deviceCode: String;
}
export interface VerifiedDetails {
  id: String;
  deviceName: String;
  deviceCode: String;
}

@Component({
  selector: 'app-dealer-return-deatils',
  templateUrl: './dealer-return-deatils.component.html',
  styleUrls: ['./dealer-return-deatils.component.scss'],
})
export class DealerReturnDeatilsComponent implements OnInit {

  returnid: String;


  alert: dealeralertStatus[] = dealeralertStatusData;
  // HospitalOptions!: boolean;
  ticketid!: any;
  ticketdata: any;
  dateTime!: Date;
  OtherRegister!: boolean;
  searchForm!: FormGroup;

  dealerdata!:any;

  //return details
  ReturnList: ReturnDetails[] = returnDetailsList;
  //Missing
  isMissing: boolean;
  //verified details
  VerifiedList: VerifiedDetails[] = verifiedDetailsList;
  //Poupup
  isTruePopUp!: boolean;

  router: any;
  selectedTab: number | undefined;

  @Input() ticketId = '';
  id: string | null | undefined;

  constructor(public dialog: MatDialog,private _route: ActivatedRoute) {

    this._route.paramMap.subscribe(
      params =>{
        let uid=params.get('id');
       // console.log(params.get('id'))
       // console.log(uid?.toString);
      }

    )
    let str = sessionStorage.getItem('ItemStatus');
  }
  public openDialog(): void {
    let dialogRef = this.dialog.open(ReturnVerficationPopupComponent, {
      width: '40%',
      height: '40%',
      // maxHeight:'60%',
      position: {
        top: '10%',
      },

      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isTruePopUp = result;
      if (this.isTruePopUp == true) {
      }
    });
  }

  checkMissingStatus() {
    let str = sessionStorage.getItem('ItemStatus');

    if (str == 'missing') {
      this.ReturnList = returnDetailsList;
      this.isMissing = true;
    } else {
      this.isMissing = false;
    }
  }

  getMissingTab(e: any) {

    if(this.isMissing==false){
      this.isMissing = true;
    }
    console.log(e)
    //console.log(e.target.value)
    this.selectedTab = 3;
  }
  ngOnInit(): void {

    this._route.paramMap.subscribe((x) => {
      this.id = x.get('id');
    //  console.log(this.id);
    this.getTicketFullinfo();

    });

    this.selectedValue = this.options[0].value;
    this.selectedStatus = this.status[0].value;
    // console.log(this.ticketid)
    //  this.openDialog();
    let str = sessionStorage.getItem('ItemStatus');

    if (str == 'missing') {
      this.ReturnList = returnDetailsList;
      this.isMissing = true;
    } else {
      this.isMissing = false;
    }
    this.checkMissingStatus();

    this.getTicketFullinfo();
    this.dateTime = new Date();
  }


  getTicketFullinfo() {
   // let tempId = localStorage.getItem('ticketid');
    this.dealerdata = this.alert.find (o => o.ticketid === this.id?.toString());
    // console.log(this.dealerdata);
  }

  options= [
    {name:'Robin Xavier',value:'Robin Xavier'},
    {name:'Teena K',value:'Teena K'}
  ]

  status = [
    {name:'Ongoing',value:'Ongoing'},
    {name:'Pending',value:'Pending'}
  ]

  selectedValue: string;
  selectedStatus:string;

}
