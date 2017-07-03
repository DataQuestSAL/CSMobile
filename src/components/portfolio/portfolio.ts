import { PolicyTabsPage } from './../../pages/policy-tabs/policy-tabs';
import { PolicyActionsComponent } from './../policy-actions/policy-actions';
import { NavController, PopoverController, NavOptions } from 'ionic-angular';
import { Portfolio } from './../../models/portfolio.model';
import { Component, Input } from '@angular/core';

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
  @Input()
  policies: Portfolio[];
  
  @Input()
  filterTerm: string;

  constructor(public popoverCtrl: PopoverController,
              public NavCtrl: NavController) {
  }

  handleClick(policy: Portfolio) {

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
