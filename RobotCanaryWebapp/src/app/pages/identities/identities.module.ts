import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AuthAlternativesComponent } from './auth-alternatives/auth-alternatives.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'identities', children: [
      { path: 'auth-alternatives', component: AuthAlternativesComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'users', component: UsersComponent },
      { path: '', redirectTo: '/identities/users', pathMatch: 'full' }
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
    UsersComponent,
    RolesComponent,
    PermissionsComponent,
    AuthAlternativesComponent
  ]
})
export class IdentitiesModule { }
