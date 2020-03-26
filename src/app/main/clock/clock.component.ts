import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() title: String
  @Input() time: number = 0
  @ViewChild('cd') private counter: CountdownComponent

  constructor() { }

  ngOnInit() {
  }

  subtractValue() {
    this.time--
  }

  stop() {
    this.counter.stop()
  }

  addValue() {
    this.time++
  }
}
