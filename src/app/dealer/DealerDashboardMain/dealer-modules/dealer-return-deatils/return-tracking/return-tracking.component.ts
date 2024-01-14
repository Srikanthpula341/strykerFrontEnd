import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import ToolSetJson from './../../../../../../database/Tools/alltools.json';
import ProgressLine from './progress.json';
import * as Icommon from './../../../../../@common/@Interfaces/Icommon';
import { DatePipe } from '@angular/common';

export interface TrackLine {
  Completed?: String;
  Complete?: String;
  cmplt?:String;
  AwaitingForMissing?: String;
  VerificationOnProcess?: String;
  returnCollected?: String;
  AgentAssigmened?: String;
  ReturnAccepeted?: String;
}




@Component({
  selector: 'app-return-tracking',
  templateUrl: './return-tracking.component.html',
  styleUrls: ['./return-tracking.component.scss'],
})
export class ReturnTrackingComponent implements OnInit {
  @Input() returnid: String;
  @Input() ToolsData: Icommon.ToolSet[] = ToolSetJson;


  level1!: string;
  level2!: string;
  level3!: string;
  level4!: string;
  level5!: string;
  level6!: string;

  circleIcon = './../../../../../assets/img/service/nullcircle.svg';
  proIcon = './../../../../../assets/img/service/fullcircle.svg';

  constructor(private datePipe: DatePipe) { }
  returnTracker: TrackLine = ProgressLine;

  ngOnInit(): void {
    console.log(this.returnTracker)
    //this.returnTracker=ProgressLine;
    let date = this.datePipe.transform(Date.now());
    console.log(this.returnTracker);
    //now().toLocaleString(),'dd MMM YYY')

    // if(this.returnTracker.Completed){
    //   this.returnTracker.Completed =" hello";
    //   console.log(this.returnTracker)
    // }
    //console.log(this.datePipe.transform(Date.now(), 'dd MMM YYY'))
    // this.retunUpdates()
    //console.log(this.retunUpdates)
  }
  // retunUpdates() {
  //  // console.log(this.returnTracker)
  //   // if(this.returnTracker.Completed){
  //   //   this.returnTracker.Completed =" ";
  //   //   console.log(this.returnTracker)
  //   // }


  // }
 

  checkTools(sId: Number, cId: String, cName: String) {
    console.log(sId, cId, cName);
  }
  listOfChecked!: Icommon.ToolSet[];
  checkData(sId: Number, cId: String) {
    if (this.listOfChecked) {
      if (this.listOfChecked.find(x => x.id == sId)) {
        let temp = this.listOfChecked.findIndex(x => x.id == sId);

      }
    } else {
      //this.listOfChecked.push()
    }
  }
  selectedRooms: Icommon.ToolSet[];
  name: any;
  value: any;
  handleSelection(itemcode: any) {
    // console.log('selected room', this.selectedRooms);
    // console.log(itemcode)
    // this.selectedRooms = itemcode.selected.map((item: { value: any; }) => item.value);
    // console.log('selected room', this.selectedRooms);
  }
}
