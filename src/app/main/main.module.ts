import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { ClockComponent } from './clock/clock.component';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { CountdownComponent } from 'ngx-countdown';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    CountdownModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [],
  providers: [CountdownComponent]
})
export class MainModule { }