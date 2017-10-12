import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router-animation';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styles: [`
    div.content {
      max-width: 840px;
      margin: auto;
      padding: 16px 8px 0 8px;
    }
  `],
  animations: [routerTransition()]
})
export class BiographyComponent implements OnInit {
  @HostBinding('@routerTransition') routerTransition;

  constructor() { }

  ngOnInit() {
  }

}
