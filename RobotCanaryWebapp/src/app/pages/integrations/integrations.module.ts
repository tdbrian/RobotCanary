import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ExternalServicesComponent } from './external-services/external-services.component';
import { ExternalDataComponent } from './external-data/external-data.component';

const routes: Routes = [
  {
    path: 'integrations', children: [
      { path: 'external-services', component: ExternalServicesComponent },
      { path: 'external-data', component: ExternalDataComponent },
      { path: '', redirectTo: '/integrations/external-services', pathMatch: 'full' }
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
    ExternalDataComponent,
    ExternalServicesComponent
  ]
})
export class IntegrationsModule { }
