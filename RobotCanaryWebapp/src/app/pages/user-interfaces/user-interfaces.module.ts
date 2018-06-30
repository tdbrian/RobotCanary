import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { ThemesComponent } from './themes/themes.component';
import { SystemActionsComponent } from '../state/system-actions/system-actions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UiComponentsComponent, ThemesComponent, SystemActionsComponent]
})
export class UserInterfacesModule { }
