import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { AboutComponent } from './pages/about/about.component';
import { BiographyComponent } from './pages/about/biography/biography.component';

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
      /* {
        path: 'cv',
        component: CvComponent
      },
      {
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
    children: [],
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
