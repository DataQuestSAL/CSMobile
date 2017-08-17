import { AuthState } from './../store/auth-state';
import { ApplicationState } from './../store/application-state';
import { Store } from '@ngrx/store';
import { LoginService } from './../providers/login.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(public loginSvc: LoginService,
              platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
            private store: Store<ApplicationState>) {
              debugger;
              this.store.select('authState')
              //.publishLast()
              .subscribe((currentState: AuthState) => { debugger; this.rootPage = (currentState.isLoggedIn? HomePage : LoginPage) })
    // loginSvc.user$.subscribe((user) => {
    //   if (user.Is_Authentic) {
    //     this.rootPage = HomePage
    //   } else {
    //     this.rootPage = LoginPage
    //   }
    // })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

