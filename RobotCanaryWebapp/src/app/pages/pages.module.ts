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

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DashboardModule
  ],
  declarations: [MissingPageComponent, SaveAppComponent, ListAppsComponent, EndpointsComponent, EntitiesComponent]
})
export class PagesModule { }
