import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() title: String
  @Input() time: number = 0
  @Input() start = false
  @ViewChild('cd') private counter: CountdownComponent

  constructor() { }

  ngOnInit() { }
  
  ngAfterViewInit() {
    if (!this.start) {
      this.stop()
    }
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
