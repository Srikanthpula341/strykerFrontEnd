import { MatIconModule } from '@angular/material/icon';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import dealeralertStatusData from '../../../../../database/dealer/dealer-alert.json';

import * as _ from 'lodash';
import ToolSetJson from './../../../../../database/Tools/alltools.json';
import AllOrderJson from './../../../../../database/Tools/allorder.json';
import * as Icommon from '../../../../@common/@Interfaces/Icommon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dealer-order-details',
  templateUrl: './dealer-order-details.component.html',
  styleUrls: ['./dealer-order-details.component.scss'],
})
export class DealerOrderDetailsComponent implements OnInit {
  //@Output( )
  orderId: String;
  //Screen width
  Height = window.innerWidth;

  alert: Icommon.dealeralertStatus[] = dealeralertStatusData;
  //All order List
  AllOrdersData: Icommon.OrderALLList[] = AllOrderJson;
  //checkList
  ToolsData: Icommon.ToolSet[] = ToolSetJson;

  ticketid!: any;
  dealerdata: any;
  dateTime!: Date;
  OtherRegister!: boolean;
  selectedData!: String;

  displayeColOrderList = [''];

  id: string | null | undefined;
  sub!: any;
  constructor(private _route: ActivatedRoute) {
    this._route.paramMap.subscribe((params) => {
      let uid = params.get('id');
     // console.log(params.get('id'));
      // console.log(uid?.toString);
    });
  }
  currentUrl!: string;
  currentLang!: any;

  ngOnInit(): void {
    this._route.paramMap.subscribe((x) => {
      this.id = x.get('id');
      //console.log(this.id);
      this.getTicketFullinfo();
    });
    this.orderId = this._route.snapshot.queryParams['id'];
    //console.log(this.orderId);

    this.dateTime = new Date();

    // console.log(this.Height)

    this.selectedValue = this.options[0].value;
    this.selectedStatus = this.status[0].value;
  }

  getTicketFullinfo() {
    let tempId = localStorage.getItem('ticketid');
    // let customerId  = localStorage.getItem('customerId');
    //console.log(tempId);

    this.dealerdata = this.alert.find(
      (o) => o.ticketid === this.id?.toString()
    );

    //console.log(this.dealerdata);
  }

  toggleSecondaryInfo(expanded: any, tools: any): void {
    const secondarySearch = expanded ? 'secondary' : 'secondary-d';
    const secondarySet = expanded ? 'secondary-d' : 'secondary';
    document
      .querySelectorAll(
        `.mat-row[data-info-id="${tools.ticketnumber}"] .mat-cell[data-info="${secondarySearch}"]`
      )
      .forEach((e) => e.setAttribute('data-info', secondarySet));
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
