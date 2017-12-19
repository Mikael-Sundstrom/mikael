import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-languages',
  template: `
    <mat-card style="border-radius:0px 2px 2px 0px;box-shadow:inset 3px 0px #00796B,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)">
      <mat-card-title>Språkkunskaper</mat-card-title>
      <div style="display: block;">
        <canvas baseChart [datasets]="languageData" [labels]="languageLabels" [options]="languageOptions" [legend]="languageLegend" [chartType]="languageType" [colors]="languageColors"></canvas>
      </div>
    </mat-card>
  `
})
export class CvLanguagesComponent implements OnInit {

  public languageLabels: string[] = ['Läsa', 'Skriva', 'Lyssna', 'Prata'];
  public languageData: any[] = [
    {
      data: [95, 80, 100, 70],
      label: 'Svenska'
    },
    {
      data: [60, 50, 85, 55],
      label: 'Engelska'
    }
  ];
  public languageLegend = true;
  public languageType = 'horizontalBar';
  public languageColors: any[] = [
    {
      backgroundColor: '#00796B',
      borderColor: 'white'
    },
    {
      backgroundColor: '#BDBDBD',
      borderColor: 'white'
    }
  ];
  public languageOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 100,
        },
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() { }

}
