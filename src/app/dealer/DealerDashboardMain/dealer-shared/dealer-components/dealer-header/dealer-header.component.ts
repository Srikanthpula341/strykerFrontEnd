import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-header',
  templateUrl: './dealer-header.component.html',
  styleUrls: ['./dealer-header.component.scss']
})
export class DealerHeaderComponent implements OnInit {


  @Output() sideNavToggled:EventEmitter<any>=new EventEmitter();

  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ToggleSidebar(){
    console.log('toggled true',this.isCollapsed)
    this.isCollapsed = !this.isCollapsed;
    this.sideNavToggled.emit();
  }

//   btnClick() {
//     this.router.navigateByUrl('dealer/invoice');
// };

}
