import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popupwindow',
  templateUrl: './popupwindow.component.html',
  styleUrls: ['./popupwindow.component.scss']
})
export class PopupwindowComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupwindowComponent>,
  
    
  ) { }
  ans="NO";
  yes_No!: boolean;


  onNoClick(yes:boolean): void {
   
    yes=false
    this.dialogRef.close(yes);
    console.log(yes);
  }
  assigningAgent(yes:boolean): void {
      yes=true;
    this.dialogRef.close(yes);
    console.log(yes);
   
    
    
  }
  ngOnInit(): void {

  }
  



}

