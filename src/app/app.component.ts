import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <app-pages></app-pages>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
