import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router-animation';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styles: [],
  animations: [routerTransition()]
})
export class BiographyComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
