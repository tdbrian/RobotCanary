import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { SurveysModule } from './surveys/surveys.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DashboardModule,
    SurveysModule
  ],
  declarations: [MissingPageComponent]
})
export class PagesModule { }
