import { LoginPage } from './../login/login';
import { LoginService } from './../../providers/login.service';
import { ClaimsPage } from './../claims/claims';
import { PortfolioComponent } from './../../components/portfolio/portfolio';
import { User } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  loggedInUser: User;

  pages: any[] = [

  ]

  tab1Root: any = PortfolioComponent;
  tab2Root: any = ClaimsPage;

  constructor(public navCtrl: NavController,
    public loginSvc: LoginService,
    public alertCtrl: AlertController) {

  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            this.loginSvc.logout();
          }
        }
      ]
    });
    alert.present();
  }

  ngOnInit() {

  }
}
