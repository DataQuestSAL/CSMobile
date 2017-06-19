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

  //public items$ : Portfolio[] = [];

  items$ : Observable<Portfolio[]>;

  constructor(public navCtrl: NavController, public http: Http, public portfolioSvc: PortflioService) {
  
  //  this.http.get('http://192.168.12.28/WebAPIProtoType/Api/Polcom/Get_Portfolio')
  //            .map(res  => res.json())
  //            .subscribe(result => 
  //            {               
  //             this.items = result;
  //             console.log(this.items);
  //            }
  //           );


      this.items$ = portfolioSvc.getPortfolio();
  }

 

}
