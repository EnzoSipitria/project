import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges {

  intervalIdF = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios en el reloj");
  // this.c();
  }

  hora:Date = new Date();

  updateClock(){
    this.intervalIdF = window.setInterval(() => {
      this.hora=new Date();
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
    this.hora=new Date();
    this.updateClock();
  }

}
