import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondChildComponent} from './second-child.component';


@NgModule({
  declarations: [SecondChildComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SecondChildComponent,
  ]
})
export class SecondChildModule {
}
