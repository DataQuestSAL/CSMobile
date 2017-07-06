import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { HighlightPipe } from './../pipes/pipe.highlight';
import { Toast } from '@ionic-native/toast';
import { PolicyTabsPage } from './../pages/policy-tabs/policy-tabs';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage'

import { APP_DI_CONFIG, APP_CONFIG } from './app.config';
import { Api } from './../providers/api.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PortfolioComponent } from '../components/portfolio/portfolio';
import { LoginPage } from "../pages/login/login";
import { LoginService } from "../providers/login.service";
import { PolicyDetailsComponent } from '../components/policy-details/policy-details';
import { PolicyActionsComponent } from '../components/policy-actions/policy-actions';
import { PortflioService } from './../providers/portfolio.service';
import { KeysPipe } from './../pipes/pipe.keys';
import { PortfolioItemComponent } from '../components/portfolio-item/portfolio-item';
import { AgentInfoComponent } from '../components/agent-info/agent-info';
import { CoversComponent } from '../components/covers/covers';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PortfolioComponent,
    PolicyDetailsComponent,
    PolicyActionsComponent,
    KeysPipe,
    HighlightPipe,
    PolicyTabsPage,
    PortfolioItemComponent,
    PortfolioItemComponent,
    AgentInfoComponent,
    CoversComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PolicyDetailsComponent,
    PolicyActionsComponent,
    AgentInfoComponent,
    CoversComponent,
    PolicyTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    Api,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Toast,
    PortflioService,
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
    CallNumber,
    EmailComposer
  ]
})
export class AppModule { }
