import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { SupportComponent } from './support/support.component';
import { BillingComponent } from './billing/billing.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'company-settings', component: CompanySettingsComponent },
      { path: 'support', component: SupportComponent },
      { path: 'billing', component: BillingComponent },
      { path: '', redirectTo: '/admin/company-settings', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanySettingsComponent, SupportComponent, BillingComponent]
})
export class AdminModule {
}
