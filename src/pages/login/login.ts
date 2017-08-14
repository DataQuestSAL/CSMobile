import { ApplicationState } from './../../store/application-state';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, LoadingOptions } from 'ionic-angular';
import { User } from "../../models/user.model";
import { LoginService } from "../../providers/login.service";
import { Store } from "@ngrx/store";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User = new User({ USER_NAME: "rony", PASSWORD: "111111" });
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginSvc: LoginService,
    public LoadingCtrl: LoadingController,
    public store: Store<ApplicationState> ) {
      debugger;
  }

  Authenticate() {
    var loading = this.LoadingCtrl.create({
      content: "Logging in..."
    } as LoadingOptions);

    loading.present();

    this.loginSvc.Authenticate(this.user.USER_NAME, this.user.PASSWORD).subscribe((data) => {
      loading.dismiss();
      //no need to change the rootNav here, this is handled in the app.component reactively
    },
      err => {
        loading.dismiss();
        console.log(err)
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
