import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';
import { getExternalInfo } from './shared/utils/externalUserInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, public http: HttpClient) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    if (!this.isAuthenticated) {
      this.oktaAuth.loginRedirect('/dashboard');
    }
    const user = await this.oktaAuth.getUser();
    const res = await getExternalInfo(this.http, user.email);
    console.dir(res);
  }
}
