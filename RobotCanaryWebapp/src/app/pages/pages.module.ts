import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { UserInterfacesModule } from './user-interfaces/user-interfaces.module';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    UserInterfacesModule
  ],
  declarations: [MissingPageComponent]
})
export class PagesModule { }
