import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled: EventEmitter<any> = new EventEmitter();

  public isCollapsed = true;
  constructor() {}

  ngOnInit(): void {}
  ToggleSidebar() {
    console.log('toggled true', this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
    this.sideNavToggled.emit();
  }
  
}
