import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { ThemesComponent } from './themes/themes.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AppsListComponent } from './apps/apps-list/apps-list.component';

const routes: Routes = [
  {
    path: 'user-interfaces', children: [
      { path: 'applications', component: AppsListComponent },
      { path: 'ui-components', component: UiComponentsComponent },
      { path: 'themes', component: ThemesComponent },
      { path: '', redirectTo: '/user-interfaces/applications', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppsListComponent, UiComponentsComponent, ThemesComponent]
})
export class UserInterfacesModule { }
