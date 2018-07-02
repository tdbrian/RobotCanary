import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { UserInterfacesModule } from './user-interfaces/user-interfaces.module';
import { StateModule } from './state/state.module';
import { IdentitiesModule } from './identities/identities.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { OperationsModule } from './operations/operations.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AdminModule } from './admin/admin.module';
import { ProfileModule } from './profile/profile.module';
import { ApiModule } from '../api/api.module';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApiModule,
    RouterModule.forChild(routes),
    UserInterfacesModule,
    StateModule,
    IdentitiesModule,
    IntegrationsModule,
    OperationsModule,
    AnalyticsModule,
    AdminModule,
    ProfileModule
  ],
  declarations: [MissingPageComponent]
})
export class PagesModule { }
