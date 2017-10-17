import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <nav color="primary" mat-tab-nav-bar style="background:#ffffff;">
      <a mat-tab-link *ngFor="let tab of tabs" [routerLink]="tab.path" routerLinkActive #rla="routerLinkActive" [active]="rla.isActive">
        <mat-icon>{{ tab.icon }}</mat-icon> &nbsp; {{tab.label}}
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
