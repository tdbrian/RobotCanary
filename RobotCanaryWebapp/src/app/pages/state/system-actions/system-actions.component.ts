import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-actions',
  templateUrl: './system-actions.component.html',
  styles: []
})
export class SystemActionsComponent implements OnInit {

  dataSource = [
    { name: 'Edit User', tags: ['Users', 'Admin'], payload: 'Edit User' },
    { name: 'New User', tags: ['Users', 'Admin'], payload: 'New User' },
    { name: 'Generate All Company Invoices', tags: ['Billing', 'Accounting'], payload: 'Generate Invoice' },
  ];

  columnsToDisplay = ['name'];

  constructor() { }

  ngOnInit() {
  }

}
