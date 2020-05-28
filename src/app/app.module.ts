import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LazyLoadedAndDynamicallyRoutedComponent} from './lazy-loaded-and-dynamically-routed/lazy-loaded-and-dynamically-routed.component';
import {LazyLoadedModule} from './lazy-loaded-and-dynamically-routed/lazy-loaded.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
