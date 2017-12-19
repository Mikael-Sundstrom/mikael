/* Core */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';

/* Angular Fire */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
const config = {
    apiKey: "AIzaSyDOvMxFl__Kp0MbxOHB-otr2Xnf6hcIegk",
    authDomain: "mikael-sundstrom.firebaseapp.com",
    databaseURL: "https://mikael-sundstrom.firebaseio.com",
    projectId: "mikael-sundstrom",
    storageBucket: "mikael-sundstrom.appspot.com",
    messagingSenderId: "874726128525"
};

/* Angular Material Design */
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule,
    MatGridListModule, MatListModule, MatTabsModule, MatCardModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule
} from '@angular/material';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PagesComponent } from './components/pages.component';
import { Error404Component } from './components/error404/error404.component';

import { AboutComponent } from './components/about/about.component';
import { BiographyComponent } from './components/about/biography/biography.component';
import { CvComponent } from './components/about/cv/cv.component';
import { CvLanguagesComponent } from './components/about/cv/cv-languages.component';
import { CvEmploymentsComponent } from './components/about/cv/cv-employments.component';
import { CvDrivingLicenseComponent } from './components/about/cv/cv-driving-license.component';
import { CvOtherMeritsComponent } from './components/about/cv/cv-other-merits.component';
import { CvEducationsComponent } from './components/about/cv/cv-educations.component';

import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggerFeedComponent } from './components/blogger/blogger-feed/blogger-feed.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        PagesComponent,
        Error404Component,
        BloggerComponent,
        AboutComponent,
        BiographyComponent,
        CvComponent, CvLanguagesComponent, CvEmploymentsComponent, CvDrivingLicenseComponent,
        CvOtherMeritsComponent, CvEducationsComponent,
        BloggerFeedComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        CoreModule,
        MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule,
        MatGridListModule, MatListModule, MatTabsModule, MatCardModule, MatExpansionModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule,
        ChartsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'se-SV' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
