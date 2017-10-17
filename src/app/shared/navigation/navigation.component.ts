import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button [matMenuTriggerFor]="navigation">
        <mat-icon>menu</mat-icon>
      </button>
      <span>&nbsp; &nbsp;{{ selectedPage }}</span>
      <span style="flex: 1 1 auto;"></span>
    </mat-toolbar>
    <img src="./../../assets/images/m.svg" style="position:absolute;top:0;right:0;z-index:9;">

    <mat-menu #navigation="matMenu">
      <nav *ngFor="let route of routes">
        <a routerLink="{{ route.path }}" mat-menu-item (click)="pageLabel(route.title)">
          <mat-icon>{{ route.icon }}</mat-icon>
          <span>{{ route.label }}</span>
        </a>
      </nav>
    </mat-menu>
  `,
  styles: [`
  img{ height: 70px; }
  @media screen and (max-width: 600px){img{ height: 62px; }}
  `]
})
export class NavigationComponent implements OnInit {
  routes = [
    { hidden: true, label: 'Hem', title: 'Mikael Sundström', path: 'hem', icon: 'home' },
    { hidden: false, label: 'Blogg', title: 'Mikael Sundström', path: 'blogg', icon: 'home' },
    { hidden: false, label: 'Om mig', title: 'Om mig', path: 'om-mig/bio', icon: 'person' },
    { hidden: false, label: 'Docs', title: 'Docs', path: 'docs', icon: 'folder' }
  ];

  selectedPage = 'Mikael Sundström';
  pageLabel(label) {
    this.selectedPage = label;
  }

  constructor() { }

  ngOnInit() {
    this.routes = this.routes.filter(route => route.hidden === false);
  }

}
