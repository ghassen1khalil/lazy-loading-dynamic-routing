import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadedAndDynamicallyRoutedComponent} from './lazy-loaded-and-dynamically-routed.component';
import {LazyLoadedRoutingModule} from './lazy-loaded-routing-module';
import {FirstChildModule} from './first-child/first-child.module';
import {SecondChildModule} from './second-child/second-child.module';



@NgModule({
  declarations: [
    LazyLoadedAndDynamicallyRoutedComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
    FirstChildModule,
    SecondChildModule
  ]
})
export class LazyLoadedModule { }
