import { Component, HostBinding } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router-animation';

@Component({
  selector: 'app-cv',
  template: `
    <div class="content">
      <app-cv-employments></app-cv-employments>
      <br>
      <br>
      <br>
      <app-cv-educations></app-cv-educations>
      <br>
      <br>
      <br>
      <app-cv-driving-license></app-cv-driving-license>
      <br>
      <br>
      <br>
      <app-cv-other-merits></app-cv-other-merits>
      <br>
      <br>
      <br>
      <app-cv-languages></app-cv-languages>
      <br>
      <br>
    </div>
  `,
  styles: [],
  animations: [routerTransition()]
})
export class CvComponent {
  @HostBinding('@routerTransition') routerTransition;
}
