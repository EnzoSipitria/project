import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  currentTime: string;

  constructor() {}

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
    var month = today.toLocaleString("es-AR", { month: "long" });
    // add a zero in front of numbers<10
    m = this.checkTime(m);
    s = this.checkTime(s);
    
    this.currentTime = `${day} de ${month} del ${y}, ${h}:${m}:${s}`;
  }


}
