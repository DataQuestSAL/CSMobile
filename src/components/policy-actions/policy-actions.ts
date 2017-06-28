import { PolicyDetailsComponent } from './../policy-details/policy-details';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Portfolio } from './../../models/portfolio.model';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the PolicyActionsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'policy-actions',
  templateUrl: 'policy-actions.html'
})
export class PolicyActionsComponent {


  constructor(public NavParams: NavParams, 
  public ViewCtrl: ViewController) {

  }

  viewDetails() {
    debugger;
    this.ViewCtrl.dismiss()
    this.NavParams.get("viewDetails")();
  }

}
