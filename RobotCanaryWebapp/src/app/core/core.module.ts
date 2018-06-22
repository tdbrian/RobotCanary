import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { UserAvatarService } from './services/user-avatar.service';
import { RouterModule } from '@angular/router';

const components = [NavSidebarComponent];

const config = {
  issuer: 'https://dev-627580.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4500/implicit/callback',
  clientId: '0oafhlyczojIlLPoZ0h7'
};

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [
    UserAvatarService
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule { }
