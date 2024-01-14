import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import TableData from '../../../../../database/dealer/cosumables.json';
import TopHospitalData from './../../../../../database/dealer/topHospitals.json';
export interface IConsumables {
  date: string;
  devicename: String;
  count: number;
  action: String;
}

export interface IHospitals {
  name: String;
  value: number;
  total: number;
  //percent:any;
}

const CONSUMABLES_DATA: IConsumables[] = TableData;
let TOP_HOSPITALS_DATA: IHospitals[] = TopHospitalData;
@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.scss'],
})
export class DealerDashboardComponent implements OnInit {
  @Input() timeFrameOption: number;
  timeFrameString: String;
  top: any;
  totalProcedures: number;
  totalOrders: number;
  returnPending: number;
  changeTotalProcedures: number;
  changeTotalOrders: number;
  topHospitals: IHospitals[];

  //Table
  displayedColumns = ['devicename', 'date', 'count', 'action'];
  dataSource!: MatTableDataSource<IConsumables>;
  pageSizes = [4];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.timeFrameOption = 0.25;
    this.getDataforSelectedTime(0.25)
    this.dataSource = new MatTableDataSource(CONSUMABLES_DATA);
    this.dataSource.paginator = this.paginator;
  }

  public cardValues() {
    this.totalProcedures = Math.round(
      this.timeFrameOption + Math.random() * 10
    );
    this.totalOrders =
      1 + Math.round(this.timeFrameOption + Math.random() * 20);
    this.returnPending =
      1 + Math.round(this.timeFrameOption + Math.random() * 10);
    this.changeTotalOrders =
      this.timeFrameOption * 3 + Math.floor(Math.random() * 1);
    this.changeTotalProcedures =
      -this.timeFrameOption * 4.3 + Math.random() * 1;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(event: any) {
    console.log(event);
    console.log(event.target.select.formselect);
    //console.log(this.timeFrameOption);
  }

  getDataforSelectedTime(timeFrameOption: number ) {

    this.cardValues();
    this.getTopHospitalsData();

    let tframe: number = this.timeFrameOption ;
    var str="";
    if (tframe == 0.25) {
      str = 'last week';
    }else  if (tframe == 1) {
      str = 'last Month';
    }else  if (tframe == 3) {
      str = 'last 3 months';
    }else  if (tframe == 6) {
      str = 'last 6 months';
    }else if(tframe ==12){
      str ='last year'
    }else{}
    this.timeFrameString=str;
    console.log(this.timeFrameString)
  }

  getTopHospitalsData() {
    this.topHospitals = TOP_HOSPITALS_DATA;
    this.topHospitals.forEach((element) => {
      element.value = 10 + Math.round(Math.random() * 10);
      element.total = element.value + Math.round(Math.random() * 5);
    });
  }

  getProgressbar(value: number, Total: number) {
    return (value / Total) * 100;
  }
}
