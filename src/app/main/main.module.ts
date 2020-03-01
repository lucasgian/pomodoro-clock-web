import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { ClockComponent } from './clock/clock.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
