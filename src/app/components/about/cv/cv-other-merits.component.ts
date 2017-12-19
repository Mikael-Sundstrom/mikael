import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-other-merits',
  template: `
    <mat-card style="border-radius:0px 2px 2px 0px;box-shadow:inset 3px 0px #00796B,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)">
      <mat-card-title>Övriga meriter</mat-card-title>
      <mat-list *ngFor="let other of otherMerits">
        <mat-list-item>
        <mat-icon mat-list-icon><img src="{{other.merit.icon}}" height="24px"></mat-icon>
          <h4 mat-line>
            {{other.merit.title}}
          </h4>
          <p mat-line> {{other.merit.date}} </p>
        </mat-list-item>
      </mat-list>
    </mat-card>
  `
})
export class CvOtherMeritsComponent implements OnInit {
  otherMerits = [
    {
      shown: true,
      merit: {
        title: 'Medlem i Mensa Sverige',
        date: new Date('10/11/14'),
        icon: './../../../assets/images/mensa.svg'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
    this.otherMerits = this.otherMerits.filter(route => route.shown === true);
  }

}
