import { Observable } from 'rxjs/Observable';
import { Portfolio } from './../../models/portfolio.model';
import { PortflioService } from './../../providers/portfolio.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public items : Portfolio[] = [];

  items$ : Observable<Portfolio[]>;

  constructor(public navCtrl: NavController,  public portfolioSvc: PortflioService) {
      this.items$ = portfolioSvc.getPortfolio();
  }

 

}
