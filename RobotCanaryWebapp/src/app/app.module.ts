import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApiConfiguration } from './api/api-configuration';
import { environment } from '../environments/environment';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => config.rootUrl = environment.robotCanaryApi;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    RouterModule.forRoot([
      {
        path: 'implicit/callback',
        component: OktaCallbackComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: MissingPageComponent,
        data: { title: '404 Page Not Found' }
      }
    ])
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApiConfiguration,
    deps: [ApiConfiguration],
    multi: true
  },
    ApiConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
