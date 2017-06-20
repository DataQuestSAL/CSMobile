import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.model";
import { LoginService } from "../../providers/login.service";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user : User = new User({});
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginSvc: LoginService) {
     
  }

  Authenticate(){
        this.loginSvc.Authenticate(this.user.USER_NAME,this.user.PASSWORD).subscribe((data)=>{
          alert(JSON.stringify(data));
          if (data.Is_Authentic == true){
            alert("Mabrouk");
          }
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
