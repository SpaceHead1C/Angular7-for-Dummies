import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template:
    `<h1>Hello, World!</h1>
    <p>My first component</p>`,
  styles: [
    `h1, p{color: grey;} p{font-size: 7rem;}`
  ]
})
export class AppComponent {
  title = 'My Angular Application';
}
