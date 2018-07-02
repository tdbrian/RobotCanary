import { Component, OnInit } from '@angular/core';
import { SystemActionsService } from '../../../api/services';
import { SystemActionEntity } from '../../../api/models';

@Component({
  selector: 'app-system-actions',
  templateUrl: './system-actions.component.html',
  styles: []
})
export class SystemActionsComponent implements OnInit {
  loading = true;
  errorOccurred = false;
  dataSource: SystemActionEntity[] = [];
  model: SystemActionEntity = {
    name: '',
    domainTags: []
  };

  columnsToDisplay = ['name', 'tags'];

  constructor(private systemActionsSvc: SystemActionsService) { }

  async ngOnInit() {
    await this.fetchSystemActions();
  }

  async fetchSystemActions() {
    this.loading = true;
    this.errorOccurred = false;
    try {
      this.dataSource = await this.systemActionsSvc.ApiV1SystemActionsOrganizationByOrganizationIdGet('').toPromise();
    } catch (error) {
      console.error(error);
      this.errorOccurred = true;
    } finally {
      this.loading = false;
    }
  }

  save() {
    console.dir(this.model);
  }
}
