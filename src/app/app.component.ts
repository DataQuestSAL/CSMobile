import { AuthState } from './../store/auth-state';
import { ApplicationState } from './../store/application-state';
import { Store } from '@ngrx/store';
import { LoginService } from './../providers/login.service';
import { Component } from '@angular/core';
import { Platform, LoadingController, Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  private loading: Loading = null;
  
  constructor(public loginSvc: LoginService,
              platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private loadingCtrl: LoadingController,
              private store: Store<ApplicationState>) {                
              store.select('authState')
                  .subscribe((currentState: AuthState) => { 
                    this.handleProgressDialog(currentState);
                    this.rootPage = (currentState.isLoggedIn? HomePage : LoginPage) 

                    
                  })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  handleProgressDialog(_currentState) {
    if (_currentState.inProgress && this.loading === null) {
      this.loading = this.loadingCtrl.create({
        content: "Logging In User..."
      });
      this.loading.present()
    }


    if (!_currentState.inProgress && this.loading !== null) {
      this.loading && this.loading.dismiss();
      this.loading = null;
    }

  }

}

