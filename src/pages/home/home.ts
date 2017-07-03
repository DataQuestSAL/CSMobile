import { Observable } from 'rxjs/Observable';
import { Portfolio } from './../../models/portfolio.model';
import { PortflioService } from './../../providers/portfolio.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormControl } from "@angular/forms/src/model";
import { BehaviorSubject } from "rxjs/Rx";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //public items : Portfolio[] = [];
  searchTerms = new BehaviorSubject<string>('');
  searchControl: FormControl;
  items$: Observable<Portfolio[]>;

  constructor(public navCtrl: NavController, public portfolioSvc: PortflioService) {

  }

  addTerm(newTerm: string) {
    this.searchTerms.next(newTerm);
  }

  ngOnInit() {
    this.items$ = this.portfolioSvc.getPortfolio();

    this.items$ = this.searchTerms.debounceTime(200).distinctUntilChanged()
      .flatMap( term => Observable.of(this.portfolioSvc.searchPortfolio(this.searchTerms.getValue())));

  }
}
