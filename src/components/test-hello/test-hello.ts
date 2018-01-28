import { Component } from '@angular/core';

/**
 * Generated class for the TestHelloComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-hello',
  templateUrl: 'test-hello.html'
})
export class TestHelloComponent {

  text: string;

  constructor() {
    console.log('Hello TestHelloComponent Component');
    this.text = 'Hello World';
  }

}
