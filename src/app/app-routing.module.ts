import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyLoadedAndDynamicallyRoutedComponent} from './lazy-loaded-and-dynamically-routed/lazy-loaded-and-dynamically-routed.component';
import {FirstChildComponent} from './lazy-loaded-and-dynamically-routed/first-child/first-child.component';
import {SecondChildComponent} from './lazy-loaded-and-dynamically-routed/second-child/second-child.component';


const routes: Routes = [
  {
    path:'lazy-loaded',
    component: LazyLoadedAndDynamicallyRoutedComponent,
    loadChildren: () => import('./lazy-loaded-and-dynamically-routed/lazy-loaded.module').then(m => m.LazyLoadedModule),
  },
  {
    path: '**',
    redirectTo: 'lazy-loaded'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
