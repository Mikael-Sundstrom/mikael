import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-driving-license',
  template: `
    <mat-card style="border-radius:0px 2px 2px 0px;box-shadow:inset 3px 0px #00796B,0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)">
      <mat-card-title>Körkort</mat-card-title>
      <mat-list *ngFor="let licenses of drivingLicense">
        <h3 mat-subheader>{{licenses.vehicle.title}}</h3>
        <mat-list-item>
          <mat-icon mat-list-icon>{{licenses.vehicle.icon}}</mat-icon>
          <h4 mat-line>
            <span *ngFor="let license of licenses.vehicle.type"> &nbsp; &nbsp; {{license}} </span>
          </h4>
          <!-- <p mat-line> {{license.updated | date}} </p> -->
        </mat-list-item>
      </mat-list>
    </mat-card>
  `
})
export class CvDrivingLicenseComponent implements OnInit {
  drivingLicense = [
    {
      shown: false,
      vehicle: {
        title: 'Motorcykel',
        type: ['AM', 'A', 'A1', 'A2'],
        icon: 'motorcycle'
      }
    },
    {
      shown: true,
      vehicle: {
        title: 'Bil',
        type: ['B'],
        icon: 'directions_car'
      }
    },
    {
      shown: false,
      vehicle: {
        title: 'Tung lastbil',
        type: ['C', 'CE'],
        icon: 'local_shipping'
      }
    },
    {
      shown: false,
      vehicle: {
        title: 'Buss',
        type: ['D', 'DE'],
        icon: 'directions_bus'
      }
    },
    {
      shown: false,
      vehicle: {
        title: 'Övriga',
        type: ['Taxi', 'Truck'],
        icon: 'local_taxi'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
    this.drivingLicense = this.drivingLicense.filter(route => route.shown === true);
  }

}
