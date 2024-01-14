import { Component, EventEmitter, HostListener, Injectable, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { map, Observable, startWith } from 'rxjs';
import alertStatusData from '../../../../../../database/service/alerts.json';
import { AlertInfoDashboardComponent } from '../../../modules/alert-info-dashboard/alert-info-dashboard.component';
import { EventEmitterService } from '../../../service.ts/event-emitter.service';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface alertStatus{
  id :number;
  alertheading:string;
  alertmessage: string;
  devicename:string;
  dealername: string;
  hospitalname:string;
  stock:string;
  alertdevice:string;
  ticketid:string;
  status:string;
  prioritystatus:string;
  orderstatus:string;
  customerType:string;
  customerId:string;
  serialNo:Number;
  partno:string;

}

@Component({
  selector: 'app-alertsidebar',
  templateUrl: './alertsidebar.component.html',
  styleUrls: ['./alertsidebar.component.scss']
})

// @Injectable()
export class AlertsidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();


  showFiller = false;
  collapsed = true;
  screenWidth = 0;
  isButtonVisible = false;
  isDashboardVisible=true;
  dateTime!: Date;
  stateForm!: FormGroup;
  selectedSort: String = '';
  data: any;

  alert:alertStatus[]=alertStatusData;


  //filter
  filteredString:string ='';
  control = new FormControl('');
  priorities: string[] = ['Very High', 'High', 'Low'];
  filteredPriorities!: Observable<string[]>;
  ticketId!:number;


constructor(private router : Router,private eventService: EventEmitterService) { }

ngOnInit(): void {
  this.screenWidth = window.innerWidth;
  this.dateTime = new Date();

  this.filteredPriorities = this.control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );

}




@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <= 768 ) {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}


toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}

selectChangeHandler(event:any){
  this.selectedSort=event.target.value;
}


showDiv = {
  filterbtn : false,

}
// getSortValue(){
//   return this.stateForm.value.sort;
// }

//Filter Priority
private _filter(value: string): string[] {
  const filterValue = this._normalizeValue(value);
  return this.priorities.filter(priority => this._normalizeValue(priority).includes(filterValue));
}

private _normalizeValue(value: string): string {
  return value.toLowerCase().replace(/\s/g, '');
}

gettingticketData(ticketid:number,customerType:string,customerId:string,serialNo:string){
  let id1=ticketid.toString();
  // sessionStorage.setItem("ticketid",id1);

  // sessionStorage.setItem("customerType",customerType);
  // sessionStorage.setItem("customerId",customerId);

  localStorage.setItem("ticketid",id1);
  localStorage.setItem("customerType",customerType);
  localStorage.setItem("customerId",customerId);
  localStorage.setItem("serialNo",serialNo)
  console.log(serialNo)
  this.isDashboardVisible=false;
  this.eventService.sendClickEvent();
  this.router.navigate(['/alertinfo']);
}

}





