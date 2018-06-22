import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveysModule } from './surveys/surveys.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SurveysModule
  ],
  declarations: [DashboardComponent, MissingPageComponent]
})
export class PagesModule { }
