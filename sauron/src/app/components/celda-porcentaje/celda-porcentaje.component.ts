import { Component, OnInit, Input, Output } from '@angular/core';

//import {  } from '@angular/core';
//import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-celda-porcentaje',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {
  /*
  * quizas hay que agregar otra variable para el progreso del MIX
  *
  **/

  private _finished: boolean = false;

  @Output()
  get Finished(): boolean {
    return this._finished;
  }
  set Finished(v: boolean) {
    this._finished = v;
  }


  @Input() currentProgress: number;
  intervalIdF = 0;
  updateCarga() {

    // console.log("startFUll Interval" + this.currentProgress);
    if (this.currentProgress != null) {
      this.intervalIdF = window.setInterval(() => {
        if (this.currentProgress >= 100) {
          this._finished = true;
          this.stop();
        } else {
          if ((100 - this.currentProgress) > 5) {
            this.currentProgress += 5;
          } else {
            this.currentProgress += (100 - this.currentProgress);
            this._finished = true;
            this.stop();
          }
        }
      }, 7000);
    }
  }
  stop() {
    clearInterval(this.intervalIdF);
  }
  constructor() {

  }

  ngOnInit() {
    if (typeof this.currentProgress === 'undefined') {
      // console.log(name + ' is undefined');
      this.currentProgress = 0;
    } else {
      this.updateCarga();
    }


  }

}
