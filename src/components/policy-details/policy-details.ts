import { NavParams } from 'ionic-angular';
import { PortflioService } from './../../providers/portfolio.service';
import { Observable } from 'rxjs/Observable';
import { Policy } from './../../models/policy.model';
import { Component, Output } from '@angular/core';
/**
 * Generated class for the PolicyDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'policy-details',
  templateUrl: 'policy-details.html'
})
export class PolicyDetailsComponent {

  Pol_Serno: number;

  @Output()
  currentPolicy$: Observable<Policy>;


  constructor(public PortSvc: PortflioService,
              private navParams: NavParams) {
  }

  ngOnInit() {
    this.currentPolicy$ = this.PortSvc.getPolicyDetails(this.navParams.get("Pol_serno"));
    this.currentPolicy$.subscribe((data) => {console.log(data)},
                        err => {console.log(err)});
  }

}
