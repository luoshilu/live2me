import { Component } from '@angular/core';

/**
 * Generated class for the NgDayCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ng-day-card',
  templateUrl: 'ng-day-card.html'
})
export class NgDayCardComponent {

  text: string;

  constructor() {
    console.log('Hello NgDayCardComponent Component');
    this.text = 'Hello World';
  }

}
