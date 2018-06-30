import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting/reporting.component';
import { DomainAnalyticsComponent } from './domain-analytics/domain-analytics.component';
import { AuditingComponent } from './auditing/auditing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportingComponent, DomainAnalyticsComponent, AuditingComponent]
})
export class AnalyticsModule { }
