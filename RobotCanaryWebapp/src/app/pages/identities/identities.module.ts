import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AuthAlternativesComponent } from './auth-alternatives/auth-alternatives.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, RolesComponent, PermissionsComponent, AuthAlternativesComponent]
})
export class IdentitiesModule { }
