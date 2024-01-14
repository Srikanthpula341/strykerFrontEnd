
import alertTableHospital from '../../../../../database/dealer/alertHospital.json';
import hospitalTicketTable from '../../../../../database/dealer/hospitalTickets.json';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import {Component, OnInit,ViewChild,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Icommon from '../../../../@common/@Interfaces/Icommon';


export interface AlertHospital {
  id:number;
  customerType: string;
  customerId: string;
  customerName: string;
  Requestedby: string;
  address: string;
  phone: string;
}

export interface HospitalOtherTicket {
  ticketnumber: any;
  requesteddate: String;
  returndate: string;
  status: String;
  action: String;
}

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.scss']
})
export class HospitaldetailsComponent implements OnInit {
 
  HospitalOptions!: boolean;
  OtherRegister!: boolean;
  Hospital: Icommon.AlertHospital[] = alertTableHospital;
  HospitalTicket: HospitalOtherTicket[] = hospitalTicketTable;
  hospitalData!: any;
  hospitalAddress!: any;
  dataSource!: MatTableDataSource<HospitalOtherTicket>;
  page = 1;

  orderId: String;


  displayedColumns = [
    'expandtag',
    'ticketnumber',
    'requesteddate',
    'returndate',
    'status',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSizes = [9];

    customerId: string | null | undefined;
    constructor(private _route: ActivatedRoute) {
    this._route.queryParams.subscribe((params) => {
       this.customerId = params['customerId'] ;
     console.log(this.customerId);
      // console.log(uid?.toString);
    });
  }

 
  ngOnInit(): void {
    
     // console.log(this.id);
      this.getTicketFullinfo();
    
    this.otherRegisterassertsTable();
    this.orderId = this._route.snapshot.queryParams['customerId'];
   // console.log(this.orderId);
  }
  


  clickedOutsideOtherRegister() {
    this.OtherRegister = false;
  }

  moreOptionOtherRegister() {
    this.OtherRegister = !this.OtherRegister;
  }

  getTicketFullinfo() {
    // let tempId = localStorage.getItem('ticketid');
    let customerId  = localStorage.getItem('customerId');
    // let customerType = localStorage.getItem('customerType');
    console.log(customerId );
    this.hospitalData = this.Hospital.find(
      (o) => o.customerId === this.customerId?.toString()
    )

 

    console.log(this.hospitalData);
    // localStorage

    // for (let i = 0; i < this.Hospital.length; i++) {
    //   if (
    //     customerType == this.Hospital.at(i)?.customerType &&
    //     customerId == this.Hospital.at(i)?.customerId
    //   ) {
    //     this.hospitalData = this.Hospital.at(i);
    //     this.hospitalAddress = this.Hospital.at(i)?.address.split(', ' || '  ');
    //   }
    // }


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public otherRegisterassertsTable() {
    this.dataSource = new MatTableDataSource(this.HospitalTicket);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  
}