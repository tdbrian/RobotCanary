import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemActionsComponent } from './system-actions/system-actions.component';
import { DomainEntitiesComponent } from './domain-entities/domain-entities.component';
import { SystemEventsComponent } from './system-events/system-events.component';
import { StateProjectionsComponent } from './state-projections/state-projections.component';
import { DataExplorerComponent } from './data-explorer/data-explorer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SystemActionsComponent, DomainEntitiesComponent, SystemEventsComponent, StateProjectionsComponent, DataExplorerComponent]
})
export class StateModule { }
