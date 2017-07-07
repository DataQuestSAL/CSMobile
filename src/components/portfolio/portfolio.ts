import { PortflioService } from './../../providers/portfolio.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { PolicyTabsPage } from './../../pages/policy-tabs/policy-tabs';
import { PolicyActionsComponent } from './../policy-actions/policy-actions';
import { NavController, PopoverController, NavOptions } from 'ionic-angular';
import { Portfolio } from './../../models/portfolio.model';
import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms/forms";

/**
 * Generated class for the PortfolioComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioComponent {
  // @Input()
  // policies: Portfolio[];

  // @Input()
  // filterTerm: string;

  //public items : Portfolio[] = [];
  searchTerms = new BehaviorSubject<string>('');
  searchControl: FormControl;
  items$: Observable<Portfolio[]>;


  constructor(public popoverCtrl: PopoverController,
    public NavCtrl: NavController , public portfolioSvc: PortflioService) {
  }

  handleClick(policy: Portfolio) {

  }

  addTerm(newTerm: string) {
    this.searchTerms.next(newTerm);
  }


  ngOnInit() {
    this.items$ = this.portfolioSvc.getPortfolio()
                  .merge(
                    this.searchTerms.debounceTime(200).distinctUntilChanged()
                    .flatMap(term => Observable.of(this.portfolioSvc.searchPortfolio(this.searchTerms.getValue())))
                  );

    //this.items$ = 

  }

  presentPopover(event: NavOptions, policy: Portfolio) {
    debugger;
    let popover = this.popoverCtrl.create(PolicyActionsComponent, {
      viewDetails: () => {
        this.NavCtrl.push(PolicyTabsPage, { "Pol_serno": policy.Pol_serno, "Tabs": policy.Tabs })
      }
    });

    popover.present({
      ev: event
    });
  }


}
