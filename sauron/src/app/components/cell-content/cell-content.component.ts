import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { identifierName, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.css']
})
export class CellContentComponent implements OnInit, OnChanges {

  // sec; 
  // seconds() { return 0; }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("cell comp onchanges called >D"+this.cellValue);
    // setTimeout(() => this.seconds = () => this.sec , 0);
    this.checkFinished();
    if (this._finished) {
      this.compareDates(this.horaLlegada, this.cellValue);
    }
  }


  @Input() cellValue: Date;
  @Output() delayStage = new EventEmitter<boolean>();
  @Input('inicio') horaLlegada: Date;
  private _estado:boolean;


  /**
   * indica si la estapa esta finalizada, en el caso de las celdas comunes 
   * solo indica si tiene valor la celda o no
   */
  private _finished: boolean;

  @Output()
  get finished(): boolean {
    return this._finished;
  }

  set finished(v: boolean) {
    this._finished = v;
  }


  constructor() {
    // console.log("created cell component")
  }



  checkFinished() {
    if (this.cellValue == null && typeof this.cellValue ==='undefined') {
      this._finished = false;
      // console.log(this._finished+" finished value null or undefined");
    }
    else {
      this._finished = true;
      // console.log(this._finished+" finished value defined");
    }
  }

  compareDates(ingreso: Date, stage: Date)/*: boolean*/ {
    // console.log(ingreso.getHours() + " comparacion H " + stage.getHours());
    if ((ingreso.getHours() + 2.5) > stage.getHours()) {
      console.log("no hay retraso en la carga");
      this._estado=false;
      this.delayStage.emit(false);
      // return true;

    } else {
      // console.log(ingreso.getHours() + " comparacion 2H " + stage.getHours());
      if (ingreso.getHours() + 2.5 == stage.getHours()) {
        // console.log(ingreso.getMinutes() + " comparacion M " + stage.getMinutes());
        if (ingreso.getMinutes() >= stage.getMinutes()) {
          console.log("no hay retraso en la carga x mnutos");
          // return true;
          this._estado=false;
          this.delayStage.emit(false);
        } else {
          console.log("LA CARGA ESTA RETRASADA");
          this._estado=true;
          this.delayStage.emit(true);
          // return false;//esta retrasada la carga
        }
      } else {
        this._estado=true;
        this.delayStage.emit(true);
        console.log("LA CARGA ESTA RETRASADA");
        // return false;//esta retrasada la carga
      }
    }
  }

  // calculateDelay() {
  //   if (this.cellValue != null) {
  //     // console.log("estoy comparandco las fechas");
  //     if (this.compareDates(this.horaLlegada, this.cellValue)) {

  //       //this.delayStage.emit(true);
  //       console.log("no cambio el estado")
  //     } else {
  //       console.log("EMITIENDO EL FALSE Y CAMBIANDO E ESTADO A")
  //       this.delayStage.emit(false);
  //     }
  //   }
  //   else {
  //     console.log("no compare ;)")
  //   }
  // }

  ngOnInit() {
    // console.log("hello estoy en OnInit" + this.cellValue + " y " + this.horaLlegada)
    // this.calculateDelay();
  }
}




