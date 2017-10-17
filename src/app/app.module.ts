import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* Angular Material Design */
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule,
  MatGridListModule, MatListModule, MatTabsModule, MatCardModule, MatExpansionModule,
  MatFormFieldModule, MatInputModule, MatDatepickerModule
} from '@angular/material';

/* Plugin */
import { ChartsModule } from 'ng2-charts';

/* Core */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Shared */
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { Error404Component } from './pages/error404/error404.component';

/* About */
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/about/biography/biography.component';
import { CvComponent } from './pages/about/cv/cv.component';
import { CvLanguagesComponent } from './pages/about/cv/cv-languages.component';
import { CvEmploymentsComponent } from './pages/about/cv/cv-employments.component';
import { CvDrivingLicenseComponent } from './pages/about/cv/cv-driving-license.component';
import { CvOtherMeritsComponent } from './pages/about/cv/cv-other-merits.component';
import { CvEducationsComponent } from './pages/about/cv/cv-educations.component';

/* Blogger */
import { BloggerComponent } from './pages/blogger/blogger.component';
import { BloggerFeedComponent } from './pages/blogger/blogger-feed/blogger-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PagesComponent,
    Error404Component,
    BloggerComponent,
    AboutComponent,
    BiographyComponent,
    CvComponent, CvLanguagesComponent, CvEmploymentsComponent, CvDrivingLicenseComponent, CvOtherMeritsComponent, CvEducationsComponent,
    BloggerFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatGridListModule, MatListModule, MatTabsModule, MatCardModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    ChartsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'se-SV' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
