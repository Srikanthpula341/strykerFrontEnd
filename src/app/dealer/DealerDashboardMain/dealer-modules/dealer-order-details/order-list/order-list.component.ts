import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import AllOrderJson from './../../../../../../database/Tools/allorder.json';
import * as Icommon from '../../../../../@common/@Interfaces/Icommon';
import { MatAccordion } from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @Input() orderId: String;
  @Input() AllOrdersData: Icommon.OrderALLList[] = AllOrderJson;
  @Input() dataSource: MatTableDataSource<Icommon.OrderTool>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageSizes = [9];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('myMenuTrigger')
  private readonly menuTrigger: MatMenuTrigger;
  displayeColOrderList = [
    'orderid',
    'name',
    'qty',
    'size',
    'slno',
    'status',
    'action',
  ];
  constructor() {}

  ngOnInit(): void {}

  getDataSource(i: any) {
    this.dataSource = new MatTableDataSource(this.AllOrdersData.at(i)?.tools);
    return this.dataSource;
  }
  getStatusColor(status: String) {
    if (status == 'InStock') {
      return 'red';
    } else {
      return 'green';
    }
  };

  public onCancel(): void {
    this.menuTrigger.closeMenu();
  }
}
