import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

//import {  } from '@angular/core';
//import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-celda-porcentaje',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit, OnChanges {
  @Output()
  isfinished(): any {
      return this.currentProgress==100;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isfinished();
  }
  


  private _finished: boolean = false;

  @Output()
  get Finished(): boolean {
    return this._finished;
  }
  set Finished(v: boolean) {
    this._finished = v;
  }

  @Input() idCarga: number;
  @Input() currentProgress: number;
  intervalIdF = 0;

  updateCarga() {
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
    if (typeof this.currentProgress === 'undefined' || this.currentProgress == -1) {
      console.log(this.currentProgress + ' is undefined');
      this.currentProgress = 0;
    } else {
      this.updateCarga();
    }


  }

}
