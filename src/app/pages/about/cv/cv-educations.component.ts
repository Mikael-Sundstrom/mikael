import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-educations',
  template: `
    <mat-card style="z-index:-1;border-radius:0px 2px 0px 0px;box-shadow:inset 3px 0px #00796B,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)">
      <mat-card-title>Utbildningar</mat-card-title>
    </mat-card>
    <mat-accordion>
      <mat-expansion-panel *ngFor="let education of educations;let last = last;let first = first;let index = index" [expanded]="step === index" (opened)="setStep(index)" hideToggle="true">
        <mat-expansion-panel-header style="box-shadow:#00796B 3px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px">
          <mat-panel-title style="flex-basis:0;">
            {{education.school.title}}
          </mat-panel-title>
          <mat-panel-description style="flex-basis:0;justify-content:space-between;align-items: center;">
            {{education.school.type}}
            <span>{{education.school.start|date:'y MMM'|titlecase}} &mdash; {{education.school.end | date:'y MMM' | titlecase}}</span>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <p>{{education.school.description}}</p>

        <mat-action-row>
          <div *ngIf="first == false;">
            <button mat-button color="warn" (click)="prevStep()">Bakåt</button>
          </div>
          <div *ngIf="last == false;">
            <button mat-button color="primary" (click)="nextStep()">Fortsätt</button>
          </div>
          <div *ngIf="last == true;">
            <button mat-button color="primary" (click)="nextStep()">Stäng</button>
          </div>
        </mat-action-row>
        

      </mat-expansion-panel>
    </mat-accordion>
  `
})
export class CvEducationsComponent implements OnInit {
  step = null;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  educations = [
    {
      shown: true,
      school: {
        title: 'Västermalms skola',
        city: 'Sundsvall',
        type: 'Gymnasieskola',
        field: 'Elinstallation',
        description: 'Lorem ipsum dolor',
        start: new Date('2005-09'),
        end: new Date('2009-01')
      }
    },
    {
      shown: true,
      school: {
        title: 'Matfors skola',
        city: 'Matfors',
        type: 'Grundskola',
        field: 'Grund',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor ',
        start: new Date('1995-09'),
        end: new Date('2004-06')
      }
    }
  ]

  constructor() { }

  ngOnInit() {
    this.educations = this.educations.filter(route => route.shown === true);
  }

}
