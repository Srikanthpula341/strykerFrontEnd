import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-sidenav',
  templateUrl: './dealer-sidenav.component.html',
  styleUrls: ['./dealer-sidenav.component.scss']
})
export class DealerSidenavComponent implements OnInit {

  isExpanded = false;


  selectedMenu: any = 'Home';

  constructor(public router: Router) { 
    
  }

  ngOnInit(): void {
  }

  // goTo(paramText: string) {
  //   this.selectedMenu = paramText;
  // }

  isHomeRoute(){
    return this.router.url === '/dealer/dealerinvoice';
  }

  isDashboardRoute(){
    return this.router.url === '/dealer/dashboard';
  }


}
