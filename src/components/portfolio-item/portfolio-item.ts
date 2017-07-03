import { Portfolio } from './../../models/portfolio.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the PortfolioItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'portfolio-item',
  templateUrl: 'portfolio-item.html'
})
export class PortfolioItemComponent {

  @Input()
  portfolioItem: Portfolio;

  @Output()
  itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  presentPopover(event, item: Portfolio) {
    this.itemClick.emit({ event, item });
  }

}
