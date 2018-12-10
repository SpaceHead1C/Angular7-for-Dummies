import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<div>
      <h1>Angular routes</h1>
      <nav>
        <a routerLink="">main</a>
        <a routerLink="/news">news</a>
        <a routerLink="/price">price</a>
        <a routerLink="/about">about us</a>
      </nav>
      <router-outlet></router-outlet>
    </div>`,
  styles: ['a {margin-left: 10px}']
})
export class AppComponent {
  title = 'My Angular Application';
}
