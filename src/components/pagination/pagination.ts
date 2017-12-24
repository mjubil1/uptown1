import { Component } from '@angular/core';

/**
 * Generated class for the PaginationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pagination',
  templateUrl: 'pagination.html'
})
export class PaginationComponent {

  text: string;

  constructor() {
    console.log('Hello PaginationComponent Component');
    this.text = 'Hello World';
  }

}
