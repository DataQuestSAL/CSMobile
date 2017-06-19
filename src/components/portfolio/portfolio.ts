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

  constructor() {
  }

   handleClick(item){    
    alert("Ok, Now we can do whatevver you want with policy: " + item.PolicyNo);
  }


}
