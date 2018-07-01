import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { PerformanceInsightsComponent } from './performance-insights/performance-insights.component';
import { FeatureFlagsComponent } from './feature-flags/feature-flags.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'operations', children: [
      { path: 'status', component: StatusComponent },
      { path: 'performance-insights', component: PerformanceInsightsComponent },
      { path: 'diagnostics', component: DiagnosticsComponent },
      { path: 'feature-flags', component: FeatureFlagsComponent },
      { path: 'deployments', component: DeploymentsComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: '', redirectTo: '/operations/status', pathMatch: 'full' }
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
    StatusComponent,
    PerformanceInsightsComponent,
    DiagnosticsComponent,
    FeatureFlagsComponent,
    DeploymentsComponent,
    ConfigurationComponent
  ]
})
export class OperationsModule { }
