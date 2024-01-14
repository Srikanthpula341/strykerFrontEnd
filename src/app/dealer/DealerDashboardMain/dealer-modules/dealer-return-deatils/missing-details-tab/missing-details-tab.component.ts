import { Component, OnInit } from '@angular/core';
import returnDetailsList from '../../../../../../database/dealer/returnDetails.json';
import { ReturnDetails } from '../dealer-return-deatils.component';
@Component({
  selector: 'app-missing-details-tab',
  templateUrl: './missing-details-tab.component.html',
  styleUrls: ['./missing-details-tab.component.scss']
})
export class MissingDetailsTabComponent implements OnInit {
   //return details
   ReturnList: ReturnDetails[] = returnDetailsList;

  public returnListVerification(id: any) {
    console.log(id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
