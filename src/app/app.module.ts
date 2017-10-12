import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* Angular Material Design */
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule,
  MatGridListModule, MatTabsModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Core */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Shared */
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { Error404Component } from './pages/error404/error404.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/about/biography/biography.component';

/* Pages */

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PagesComponent,
    Error404Component,
    BloggerComponent,
    AboutComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule, MatGridListModule,
    MatTabsModule, MatCardModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'se-SV' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
