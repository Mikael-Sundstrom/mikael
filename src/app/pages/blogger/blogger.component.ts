import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogger',
  template: `
    <app-blogger-feed></app-blogger-feed>
  `,
  styles: []
})
export class BloggerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
