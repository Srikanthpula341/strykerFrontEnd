import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

import { Router } from '@angular/router';
import * as _ from 'lodash';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';
import dealeralertStatusData from '../../../../../../database/dealer/dealer-alert.json'


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface dealeralertStatus{
        id:number;
        alertstatus:string;
        ticketid:string;
        ticketstatus:string;
        alertheading:string;
        prioritystatus:string;
        ordereditemno:string;
        request:string;
        type:string;
        customerId: string;
        doctorsname:string;
}

@Component({
  selector: 'app-dealer-alertsidebar',
  templateUrl: './dealer-alertsidebar.component.html',
  styleUrls: ['./dealer-alertsidebar.component.scss']
})
export class DealerAlertsidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Output() tid!:String;

  showToggle: any;
  mode: any;
  openSidenav:any;
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);

  @ViewChild('sidenav')
  matSidenav!: MatSidenav;

  showFiller = false;
  collapsed = true;
  screenWidth = 0;
  isButtonVisible = false;
  dateTime!: Date;
  stateForm!: FormGroup;
  selectedSort: String = '';
  data: any;
    //filter
    filteredString:string ='';
    control = new FormControl('');
    priorities: string[] = ['All type','Order', 'Return'];
    filteredPriorities!: Observable<string[]>;
    ticketId!:number;

  alert:dealeralertStatus[]=dealeralertStatusData;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.dateTime = new Date();
    this.collapsed=false;



    this.filteredPriorities = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.getScreenWidth().subscribe(width => {
      //console.log(width)
      if (width < 1080) {
       this.showToggle = 'show';
       this.mode = 'over';
       this.openSidenav = false;

     }
     else if (width >1080) {
       this.showToggle = 'hide';
       this.mode = 'side';

       this.openSidenav = true;
     }
   });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth$.next(event.target.innerWidth);

    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();

  }


toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}

// selectChangeHandler(event:any){
//   this.selectedSort=event.target.value;
// }

showDiv = {
  filterbtn : false,

}
getSortValue(){
  return this.stateForm.value.sort;
}

//Filter Priority
private _filter(value: string): string[] {
  const filterValue = this._normalizeValue(value);
  return this.priorities.filter(priority => this._normalizeValue(priority).includes(filterValue));
}



private _normalizeValue(value: string): string {
  return value.toLowerCase().replace(/\s/g, '');
}

gettingticketData(ticketid:number,type:string,status:string,customerId:string){
  this.tid=ticketid.toString();
  let id=ticketid.toString();
  sessionStorage.setItem("ticketid",id);
  sessionStorage.setItem("OrderType",type.toString());
  sessionStorage.setItem("ItemStatus",status);
  sessionStorage.setItem("customerId",customerId);
  console.log(ticketid,type,status,customerId);

  if(type=="Return"){
    this.router.navigate(['/dealer/request/return',id], { queryParams: { type: "return",id:id.toString(),customerId: customerId }});
  }else if(type=="Order"){
    this.router.navigate(['/dealer/request/order',id], { queryParams: { type: "order",id:id.toString() ,customerId: customerId}});
  }
  else{
    throw new Error("something went wrong");
  }

}


}
