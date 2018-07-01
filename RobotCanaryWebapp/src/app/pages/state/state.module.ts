import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemActionsComponent } from './system-actions/system-actions.component';
import { DomainEntitiesComponent } from './domain-entities/domain-entities.component';
import { SystemEventsComponent } from './system-events/system-events.component';
import { StateProjectionsComponent } from './state-projections/state-projections.component';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';
import { Routes, RouterModule } from '@angular/router';
import { PublicApisComponent } from './public-apis/public-apis.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'state', children: [
      { path: 'data-explorer', component: DataExplorerComponent },
      { path: 'domain-entities', component: DomainEntitiesComponent },
      { path: 'state-projections', component: StateProjectionsComponent },
      { path: 'system-actions', component: SystemActionsComponent },
      { path: 'system-events', component: SystemEventsComponent },
      { path: 'public-apis', component: PublicApisComponent },
      { path: '', redirectTo: '/state/system-actions', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SystemActionsComponent,
    DomainEntitiesComponent,
    SystemEventsComponent,
    StateProjectionsComponent,
    DataExplorerComponent,
    PublicApisComponent
  ]
})
export class StateModule { }
