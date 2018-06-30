import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { SupportComponent } from './support/support.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompanySettingsComponent, SupportComponent, BillingComponent]
})
export class AdminModule {
}
