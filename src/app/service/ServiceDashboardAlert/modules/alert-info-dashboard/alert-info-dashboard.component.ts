import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

import alertStatusData from '../../../../../database/service/alerts.json';
import alertTableOwner from '../../../../../database/service/alertOwner.json';
import registerAssetTable from '../../../../../database/service/registerAsset.json'
import { PopupwindowComponent } from './popupwindow/popupwindow.component';
import { MatDialog } from '@angular/material/dialog';
import deviceData from '../../../../../database/service/deviceinfo.json';
import errordata from '../../../../../database/service/error.json';
import { EventEmitterService } from '../../service.ts/event-emitter.service';


interface alertStatus {
  id: number;
  alertheading: string;
  alertmessage: string;
  devicename: string;
  dealername: string;
  hospitalname: string;
  stock: string;
  alertdevice: string;
  ticketid: string;
  status: string;
  prioritystatus: string;
}


export interface RegisterAssets {
  item: any;
  discription: String;
  serial: string;
  warrertytype: String;
  warrrentyexpiry: String

};

export interface AlertOwner {
  customerType: String,
  customerId: string,
  customerName: string,
  address: string,
  phone: string,
}

interface Deviceinfo {
  customerType: string;
  customerId: string;
  activitystatus: string;
  estlife: string;
  batterystatus: string;
  lastservicedate: string;
  serialno: string;
  firmwareversion: string;
  mfd: string;
  installationdate: string;
  lastusedate: string;
  lastuseduration: string;
  lasthandpiecesno: string;
  lastchargetime: string;
  lastusedhandpiecetype: string;
  totalusecount: string;
  totalchargecount: string;
  totalusageduration: string;
  estliferemaining: string;
  errormessage: string;
  errordate: string;
  FirmwareversionBC: string;
  ManufacturingdateBC: string;
  InstallationdateBC: string;
  LastusedateBC: string;
  LastusedurationBC: string;
  LastchargedpowermoduleBC: string;
  TotalusecountBC: string;
  NextpreventivemaintenancecheckBC: string;
  TotalusagedurationBC: string;
  EstimatedlifeBC: string;
  FrequentlychargedpowermodulesBC: string;
  HandpiecetypeDTD: string;
  ManufacturingdateDTD: string;
  InstallationdateDTD: string;
  LastusedateDTD: string;
  LastusedurationDTD: string;
  LastchargedmoduleserialnousedDTD: string;
  TotalusecountDTD: string;
  TotalusagedurationDTD: string;
  NextpreventivemaintenancecheckDTD: string;
  EstimatedliferemainingDTD: string;
  FrequentlyusedpowermodulesDTD: string;

}
interface IError {
  message: string,
  id: string,
  date: string
}
const RegisterAssetsTable: RegisterAssets[] = registerAssetTable;
@Component({
  selector: 'app-alert-info-dashboard',
  templateUrl: './alert-info-dashboard.component.html',
  styleUrls: ['./alert-info-dashboard.component.scss']
})
export class AlertInfoDashboardComponent implements OnInit {
  ///@Input('app-alert-info-dashboard') inData: any;

  dateTime!: Date;
  ticketid!: any;
  alert: alertStatus[] = alertStatusData;

  deviceError: IError[] = errordata;

  ticketdata: any;

  //Mat Tabs
  //general info
  Owner: AlertOwner[] = alertTableOwner;
  ownerData!: any;
  ownerAddress!: any;
  //deviceinfo
  devices: Deviceinfo[] = deviceData;
  device: any;
  devicesData!: any;
  devicesAddress!: any;

  Register: RegisterAssets[] = registerAssetTable;
  page = 1;

  level1!: string;
  level2!: string;
  level3!: string;
  level4!: string;
  level5!: string;


  circleIcon = './../../../../../assets/img/service/nullcircle.svg';
  proIcon = './../../../../../assets/img/service/fullcircle.svg';
  displayedColumns = ['item', 'discription', 'serial', 'warrertytype', 'warrrentyexpiry'];
  dataSource!: MatTableDataSource<RegisterAssets>;
  dataTable: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageSizes = [9];

  dataset = [];
  date!: Date;

  constructor(public dialog: MatDialog, public eventEmitorService: EventEmitterService) {
  }

  isTrue!: boolean;
  IsVisible!: boolean;
  openDialog(): void {
    let dialogRef = this.dialog.open(PopupwindowComponent, {
      width: '400px',
      height: '200px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isTrue = result;
      if (this.isTrue == true) {
        this.getStatusOfServiceUpdate();
      }

    });
  }


  ngOnInit(): void {
   // console.log(this.inData);
    this.getTicketFullinfo();
    this.dateTime = new Date();
    this.Owner.at(0)?.phone;
    this.getStatusOfServiceUpdate();
    this.otherRegisterassertsTable();
  }

  getTicketFullinfo() {
    let tempId = localStorage.getItem("ticketid");
    let customerId = localStorage.getItem("customerId");
    let customerType = localStorage.getItem("customerType");
    let serialNo = localStorage.getItem("serialNo");
    // localStorage

    for (let i = 0; i < this.Owner.length; i++) {
      if (customerType == this.Owner.at(i)?.customerType
        && customerId == this.Owner.at(i)?.customerId) {
        this.ownerData = this.Owner.at(i)
        this.ownerAddress = this.Owner.at(i)?.address.split(', ' || '  ');

      }
    }

    for (let i = 0; i < this.devices.length; i++) {
      if (customerType == this.devices.at(i)?.customerType
        && customerId == this.devices.at(i)?.customerId) {
        this.devicesData = this.devices.at(i)
      }

    }
    console.log(serialNo);


    for (let i = 0; i < this.devices.length; i++) {
      if (this.devices.at(i)?.serialno == serialNo) {
        console.log(serialNo)
        this.device = this.devices.at(i)
        console.log(this.device)
        break;
      }
    }



    for (let i = 0; i < this.alert.length; i++) {

      if (tempId == this.alert.at(i)?.ticketid) {
        this.ticketdata = this.alert.at(i);
      }
    }
  }
  public getStatusOfServiceUpdate() {
    this.level1 = "31 oct 2022";

    if (this.level2 == undefined) {
      this.IsVisible = true;
    }



    if (this.isTrue == true) {
      this.date = new Date();
      this.level2 = "11 Nov 2022";

      if (this.level2 == undefined) {
        this.IsVisible = true;
      } else {
        this.IsVisible = false;
      }
    }

  }

  //deviceinfo

  step = 0;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }




  public otherRegisterassertsTable() {

     this.dataSource = new MatTableDataSource(this.Register);


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  show!: boolean;
  complaintOptions!: boolean;
  agentOptions!: boolean;
  progress!: boolean;
  OwnerOptions!: boolean;
  OtherRegister!: boolean;


  moreOption() {
    this.show = !this.show;
  }
  moreOptionOtherRegister() {
    this.OtherRegister = !this.OtherRegister;
  }
  moreOptioncomplaintOptions() {
    this.complaintOptions = !this.complaintOptions;

  }

  moreOptionOwnerOptions() {
    this.OwnerOptions = true;

  }
  moreOptionagentOptions() {
    this.agentOptions = !this.agentOptions;

  }
  clickedOutsideOtherRegister() {
    this.OtherRegister = false;
  }
  clickedOutsideOwnerOptions() {
    this.OwnerOptions = false;
  }

  clickedOutsidecomplaintOptions(): void {
    this.complaintOptions = false;
  }
  clickedOutsideagentOptions(): void {
    this.agentOptions = false;
  }
  moreOptionProgress() {
    this.progress = !this.progress;

  }
  clickedOutsideProgress(): void {
    this.progress = false;

  }

}
