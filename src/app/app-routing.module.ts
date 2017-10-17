import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { Error404Component } from './pages/error404/error404.component';
/* About */
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/about/biography/biography.component';
import { CvComponent } from './pages/about/cv/cv.component';
/* Blogger */
import { BloggerComponent } from './pages/blogger/blogger.component';
import { BloggerFeedComponent } from './pages/blogger/blogger-feed/blogger-feed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blogg',
    pathMatch: 'full'
  },
  {
    path: 'om-mig',
    children: [
      {
        path: 'bio',
        component: BiographyComponent
      },
      {
        path: 'cv',
        component: CvComponent
      },
      /* {
        path: 'arbete',
        component: WorkComponent
      }, */
      {
        path: '**',
        children: [],
        component: Error404Component
      }
    ],
    component: AboutComponent
  },
  {
    path: 'blogg',
    children: [
      {
        path: 'feed',
        children: [],
        component: BloggerFeedComponent
      },
      {
        path: '**',
        children: [],
        component: Error404Component
      }
    ],
    component: BloggerComponent
  },
  {
    path: '**',
    children: [],
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
