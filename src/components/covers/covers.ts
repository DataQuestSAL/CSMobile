import { Component } from '@angular/core';

/**
 * Generated class for the CoversComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'covers',
  templateUrl: 'covers.html'
})
export class CoversComponent {

  text: string;

  constructor() {
    console.log('Hello CoversComponent Component');
    this.text = 'Hello World';
  }

}
