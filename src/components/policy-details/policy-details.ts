import { KeysPipe } from './../../pipes/pipe.keys';
import { NavParams } from 'ionic-angular';
import { PortflioService } from './../../providers/portfolio.service';
import { Observable } from 'rxjs/Observable';
import { Policy } from './../../models/policy.model';
import { Component } from '@angular/core';
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
  currentPolicy$: Observable<Policy>;

  constructor(public PortSvc: PortflioService,
              private navParams: NavParams) {
  }

  ngOnInit() {
    debugger;
    this.currentPolicy$ = this.PortSvc.getPolicyDetails(this.navParams.get("Pol_serno"));

    this.currentPolicy$.subscribe(() => {},
                        err => {console.log(err)});
  }

}
