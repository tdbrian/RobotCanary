import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SaveAppComponent } from './apps/save-app/save-app.component';
import { ListAppsComponent } from './apps/list-apps/list-apps.component';
import { EndpointsComponent } from './endpoints/endpoints.component';
import { EntitiesComponent } from './entities/entities.component';
import { ApplicationsComponent } from './applications/applications.component';
import { UserInterfacesComponent } from './user-interfaces/user-interfaces.component';
import { AppsListComponent } from './user-interfaces/apps/apps-list/apps-list.component';
import { ExternalServicesComponent } from './integrations/external-services/external-services.component';
import { ExternalDataComponent } from './integrations/external-data/external-data.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DashboardModule
  ],
  declarations: [MissingPageComponent, SaveAppComponent, ListAppsComponent, EndpointsComponent, EntitiesComponent, ApplicationsComponent, UserInterfacesComponent, AppsListComponent, ExternalServicesComponent, ExternalDataComponent]
})
export class PagesModule { }
