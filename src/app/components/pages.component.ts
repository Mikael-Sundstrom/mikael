import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
