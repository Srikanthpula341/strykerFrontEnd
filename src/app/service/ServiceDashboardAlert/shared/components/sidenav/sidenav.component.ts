import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isExpanded = false;

  selectedMenu: any = 'Home';

  constructor() { }

  ngOnInit(): void { }

  // goTo(paramText: string) {
  //   this.selectedMenu = paramText;
  // }
}
