import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { DomainAnalyticsComponent } from './domain-analytics/domain-analytics.component';
import { AuditingComponent } from './auditing/auditing.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'analytics', children: [
      { path: 'reporting', component: ReportingComponent },
      { path: 'domain-analytics', component: DomainAnalyticsComponent },
      { path: 'auditing', component: AuditingComponent },
      { path: '', redirectTo: '/analytics/reporting', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportingComponent, DomainAnalyticsComponent, AuditingComponent]
})
export class AnalyticsModule { }
