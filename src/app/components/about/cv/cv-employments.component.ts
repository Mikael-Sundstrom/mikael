import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-employments',
  template: `
    <mat-card style="z-index:-1;border-radius:0px 2px 0px 0px;box-shadow:inset 3px 0px #00796B,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)">
      <mat-card-title>Anställningar</mat-card-title>
    </mat-card>
    <mat-accordion>
      <mat-expansion-panel *ngFor="let employment of employments;let last = last;let first = first;let index = index" [expanded]="step === index" (opened)="setStep(index)" hideToggle="true">
        <mat-expansion-panel-header style="box-shadow:#00796B 3px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px">
          <mat-panel-title style="flex-basis:0;">
            {{employment.work.title}}
          </mat-panel-title>
          <mat-panel-description style="flex-basis:0;justify-content:space-between;align-items: center;">
            {{employment.work.field}}
            <span>{{employment.work.start}} &mdash; {{employment.work.end}}</span>
          </mat-panel-description>
        </mat-expansion-panel-header>

        <p>{{employment.work.description}}</p>

        <mat-action-row>
        <div *ngIf="first === false;">
          <button mat-button color="warn" (click)="prevStep()">Tillbaka</button>
        </div>
        <div *ngIf="last === false;">
          <button mat-raised-button color="accent" (click)="nextStep()">Nästa</button>
        </div>
        <div *ngIf="last === true;">
          <button mat-raised-button color="accent" (click)="nextStep()">Stäng</button>
        </div>
      </mat-action-row>
    </mat-expansion-panel>
    </mat-accordion>
  `
})
export class CvEmploymentsComponent implements OnInit {
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  employments = [
    {
      shown: true,
      work: {
        title: 'Nordling El & Larm',
        city: 'Timrå',
        field: 'Administratör',
        description: 'Kontorsarbete i samband med arbetsrehabilitering efter långtidssjukskrivning. Fick skriva policyer, och förbereda företaget till kvalitetsledningssystem ISO 9001. Väldigt mycket Excelarbete.',
        start: '2014-09',
        end: '2015-03'
      }
    },
    {
      shown: true,
      work: {
        title: 'Hjertmans båttillbehör',
        city: 'Sundsvall',
        field: 'Lagerarbetare',
        description: 'Jag sommarjobbade på lagret för Hjertmans e-handel verksamhet tre år i rad. Jag fick ta emot leveranser, och sända till kunder. Hjälpte också kunder i den lokala butiken.',
        start: '2012-04',
        end: '2012-09'
      }
    },
    {
      shown: true,
      work: {
        title: 'Sidsjö fastigheter',
        city: 'Sundsvall',
        field: 'Elektriker',
        description: 'Elektrikerarbete upp till 400 V. Vi var tre anställda elektriker på Sidsjöområdet, och det var för mesta dels renoveringsarbete. Jag var med i bygget av Sidsjö vårdcentral.',
        start: '2011-04',
        end: '2012-03'
      }
    }
  ]


  constructor() { }

  ngOnInit() {
    this.employments = this.employments.filter(route => route.shown === true);
  }

}
