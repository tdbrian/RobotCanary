import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartNewSurveyComponent } from './start-new-survey/start-new-survey.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'survey/start-new',
    component: StartNewSurveyComponent,
    data: { title: 'Start New Survey' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StartNewSurveyComponent
  ]
})
export class SurveysModule { }
