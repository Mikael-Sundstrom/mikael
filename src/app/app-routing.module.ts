import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Pages */
import { Error404Component } from './components/error404/error404.component';
/* About */
import { AboutComponent } from './components/about/about.component';
import { BiographyComponent } from './components/about/biography/biography.component';
import { CvComponent } from './components/about/cv/cv.component';
/* Blogger */
import { BloggerComponent } from './components/blogger/blogger.component';
import { BloggerFeedComponent } from './components/blogger/blogger-feed/blogger-feed.component';
import { FooterComponent } from './components/footer/footer.component';

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
    path: 'docs',
    children: [],
    component: FooterComponent
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
