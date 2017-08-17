import { AuthState } from './../../store/auth-state';
import { UiState } from './../../store/ui-state';
import { ApplicationState } from './../../store/application-state';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, LoadingOptions, Loading } from 'ionic-angular';
import { User } from "../../models/user.model";
import { LoginService } from "../../providers/login.service";
import { Store } from "@ngrx/store";
import { AuthenticateAction } from "../../store/actions/users.actions";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User = new User({ USER_NAME: "rony", PASSWORD: "111111" });
  private loading: Loading = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginSvc: LoginService,
    public loadingCtrl: LoadingController,
    public store: Store<ApplicationState> ) {
      debugger;
  }

  Authenticate() {
    // this.loading = this.loadingCtrl.create({
    //   content: "Logging in..."
    // } as LoadingOptions);

    // this.loading.present();

    var dispose = this.store.select('authState')
    //.filter((currentState: AuthState) => currentState.inProgress)  
    //.distinctUntilChanged()
    .subscribe(
      (currentState: AuthState) => {
        console.log("auth store changed - ", currentState);
        debugger;
        if (currentState.user) {
          dispose.unsubscribe();
          //this.nav.setRoot(HomePage, {});
        }

        this.handleProgressDialog(currentState);

        //this.error = currentState.error
        
      },
      error => {
        console.log(error)
      }
    );

    // this.loginSvc.Authenticate(this.user.USER_NAME, this.user.PASSWORD).subscribe((data) => {
    //   loading.dismiss();
    //   //no need to change the rootNav here, this is handled in the app.component reactively
    // },
    //   err => {
    //     loading.dismiss();
    //     console.log(err)
    //   });

      // set payload
      const payload = {
        username: this.user.USER_NAME,
        password: this.user.PASSWORD
      };
  
      // dispatch AuthenticationAction and pass in payload
      this.store.dispatch(new AuthenticateAction(payload));
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
