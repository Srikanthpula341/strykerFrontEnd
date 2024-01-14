import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import returnDetailsList from '../../../../../../database/dealer/returnDetails.json';
import verifiedDetailsList from '../../../../../../database/dealer/verifiedDetails.json';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-return-details-tab',
  templateUrl: './return-details-tab.component.html',
  styleUrls: ['./return-details-tab.component.scss']
})


export class ReturnDetailsTabComponent implements OnInit {
  // querySelector(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }

  @Input() returnid:String;
  @Output() missingTabIndex = new EventEmitter<number>();
  indexNum:Number;
    //return details
    ReturnList: ReturnDetails[] = returnDetailsList;
      //Missing
  isMissing!: boolean;
  //verified details
  VerifiedList: VerifiedDetails[] = verifiedDetailsList;
  selectedTab: number | undefined;

    addingMissingList() {
      // this.router.navigate(['/Missing/Damage']);
      this.isMissing = true;
      //console.log("Open new Tab")
      this.selectedTab = 3;
      console.log(this.missingTabIndex.toString.length)
      this.missingTabIndex.next(this.selectedTab);



    // this.router.navigateByUrl('/missingTab')
    }
    public returnListVerification(id: any) {
      console.log(id);
    }
    public remainingItems(){
      console.log("remaining items");
    }
    public verifyItems(){
      console.log("item verified")

    }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
