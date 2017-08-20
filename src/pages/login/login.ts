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
      
      
      // var dispose = this.store.select('authState')
      // .subscribe(
      //   (currentState: AuthState) => {
      //     console.log("auth store changed - ", currentState);
      //     if (currentState.user) {
      //       dispose.unsubscribe();
      //     }
  
      //     //this.handleProgressDialog(currentState);
  
      //     //this.error = currentState.error          
      //   },
      //   error => {
      //     console.log(error)
      //   }
      // );
      
  }

  Authenticate() {
      // set payload
      const payload = {
        username: this.user.USER_NAME,
        password: this.user.PASSWORD
      };
      // dispatch AuthenticationAction and pass in payload
      this.store.dispatch(new AuthenticateAction(payload));
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
