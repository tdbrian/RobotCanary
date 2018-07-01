import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-system-actions',
  templateUrl: './system-actions.component.html',
  styles: []
})
export class SystemActionsComponent implements OnInit {
  model = {
    name: ''
  };

  dataSource = [
    { name: 'Edit User', tags: ['Users', 'Admin'], payload: 'Edit User' },
    { name: 'New User', tags: ['Users', 'Admin'], payload: 'New User' },
    { name: 'Generate All Company Invoices', tags: ['Billing', 'Accounting'], payload: 'Generate Invoice' },
  ];

  columnsToDisplay = ['name', 'payload', 'tags'];

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.dir(this.model);
  }

}
