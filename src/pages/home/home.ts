import { ClaimsPage } from './../claims/claims';
import { PortfolioComponent } from './../../components/portfolio/portfolio';
import { User } from './../../models/user.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {

  }

  
  ngOnInit() {
 
  }
}
