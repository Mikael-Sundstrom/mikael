import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <nav color="primary" md-tab-nav-bar style="background:#ffffff;">
      <a md-tab-link *ngFor="let tab of tabs" [routerLink]="tab.path" routerLinkActive #rla="routerLinkActive" [active]="rla.isActive">
        <md-icon>{{ tab.icon }}</md-icon> &nbsp; {{tab.label}}
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  title = 'Om mig';

  tabs = [
    { label: 'Bio', path: 'bio', icon: 'person' },
    { label: 'Cv', path: 'cv', icon: 'school' },
    { label: 'Arbete', path: 'arbete', icon: 'work' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
