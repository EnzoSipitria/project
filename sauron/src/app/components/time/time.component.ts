import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  monthNames: string[];
  currentTime: string;

  constructor() {
    this.monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

  }

  ngOnInit() {
    setInterval(() => {
      this.startTime()
    }, 500);
  }

  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var y = today.getFullYear();
    var day = today.getUTCDate();
    var month = today.getMonth();
    // add a zero in front of numbers<10
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.currentTime = `${day} de ${this.monthNames[month]} del ${y}, ${h}:${m}:${s}`;
  }


}
