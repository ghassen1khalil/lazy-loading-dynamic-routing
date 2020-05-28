import {RouterModule, Routes} from '@angular/router';
import {FirstChildComponent} from './first-child/first-child.component';
import {SecondChildComponent} from './second-child/second-child.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'first',
    component: FirstChildComponent,
  },
  {
    path: 'second',
    component: SecondChildComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule {
}
