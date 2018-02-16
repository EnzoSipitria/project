import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { identifierName, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.css']
})
export class CellContentComponent implements OnInit, OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    this.checkFinished();
    if (this._finished) {
      console.log("compareDates call: " +this.horaLlegada + " //  " + this.cellValue);
      this.compareDates(this.parseDate(this.horaLlegada), this.parseDate(this.cellValue));
    }
  }

  parseDate(value): string[] {
    var index = value.indexOf('T');
    var aux = value.substring(index + 1);
    aux= aux.split(':');
   
    return aux;
  }

  @Input() cellValue: Date;
  @Output() delayStage = new EventEmitter<boolean>();
  @Input('inicio') horaLlegada: Date;
  private _estado: boolean;


  /**
   * indica si la estapa esta finalizada, en el caso de las celdas comunes 
   * solo indica si tiene valor la celda o no
   */
  private _finished: boolean;


  get Finished(): boolean {
    return this._finished;
  }

  set Finished(v: boolean) {
    this._finished = v;
  }


  constructor() {
    // console.log("created cell component")
  }



  checkFinished() {
    if (this.cellValue == null || typeof this.cellValue === 'undefined') {
      this._finished = false;
      // console.log(this._finished+" finished value null or undefined");
    }
    else {
      this._finished = true;
      // console.log(this._finished+" finished value defined");
    }
  }

  compareDates(ingreso, stage)/*: boolean*/ {
    /*los array siguientes contiene el tiempo, [0] horas [1] minutos [2]segundos
     */
   var aux= +ingreso[0]+1;
   var horasEtapa= +stage[0];
   var minIngreso = +ingreso[1];
   var minEtapa = +stage[1];

    if (aux > horasEtapa) {
      this._estado = false;
      this.delayStage.emit(false);

    } else {
      if ( aux == horasEtapa) {
        if (minIngreso >= minEtapa) {
          this._estado = false;
          this.delayStage.emit(false);
        } else {
          this._estado = true;
          this.delayStage.emit(true);
        }
      } else {
        this._estado = true;
        this.delayStage.emit(true);
      }
    }
  }


  ngOnInit() {
  }
}




