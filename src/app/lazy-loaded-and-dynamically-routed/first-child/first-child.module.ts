import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstChildComponent} from './first-child.component';



@NgModule({
  declarations: [FirstChildComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FirstChildComponent,
  ]
})
export class FirstChildModule { }
