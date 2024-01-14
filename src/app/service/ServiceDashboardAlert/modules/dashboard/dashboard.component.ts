import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import TableData from '../../../../../database/service/cosumables.json';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { MatSort } from '@angular/material/sort';

export interface IConsumables {
  date: string;
  phone: string;
  devicename: String;
  count: number;
  action: String;
}

const CONSUMABLES_DATA: IConsumables[] = TableData;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //Icons
  upgreen = './../../../../../assets/img/UpGreenArrow.svg';
  upred = './../../../../../assets/img/UpRedArrow.svg';
  more = './../../../../../assets/img/3dots.svg';

  //varaialbles
  dueNow!: Number;
  dueSoon!: Number;
  notDue!: Number;
  totalTickets!:Number;
  solvedTickets!:Number;
  pendingickets!:Number;
  ongoingTickets!:Number;




  //Tale variables
  displayedColumns = ['devicename', 'date', 'count', 'action'];
  dataSource!: MatTableDataSource<IConsumables>;
  pageSizes = [4];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(CONSUMABLES_DATA);
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
