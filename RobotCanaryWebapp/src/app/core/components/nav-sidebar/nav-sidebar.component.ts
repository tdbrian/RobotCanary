import { Component, OnInit } from '@angular/core';
import { expandableAnimation } from 'src/app/shared/utils/animations';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss'],
  animations: expandableAnimation
})
export class NavSidebarComponent implements OnInit {
  openTab = 'mySurveys';

  constructor() { }

  ngOnInit() {
  }

  isOpen(openTab: string) {
    return openTab === this.openTab;
  }

  toggleTab(tagName: string) {
    this.openTab = tagName;
  }

}
