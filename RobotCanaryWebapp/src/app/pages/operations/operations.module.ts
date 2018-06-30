import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { PerformanceInsightsComponent } from './performance-insights/performance-insights.component';
import { DiagnoticsComponent } from './diagnotics/diagnotics.component';
import { FeatureFlagsComponent } from './feature-flags/feature-flags.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatusComponent, PerformanceInsightsComponent, DiagnoticsComponent, FeatureFlagsComponent, DeploymentsComponent, ConfigurationComponent]
})
export class OperationsModule { }
