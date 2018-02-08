import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { identifierName, identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.css']
})
export class CellContentComponent implements OnInit {

  @Input() cellValue: Date;
  @Output() delayStage = new EventEmitter<boolean>();
  estado:boolean=true;
  // @Output() getEstado = new EventEmitter();
  @Input('inicio') horaLlegada: Date;

  constructor() { 
    console.log("created cell component")
  }



  compareDates(ingreso: Date, stage: Date): boolean {
    // console.log(ingreso.getHours() + " comparacion H " + stage.getHours());
    if ((ingreso.getHours() + 2.5) > stage.getHours()) {
      console.log("no hay retraso en la carga");
      return true;

    } else {
      // console.log(ingreso.getHours() + " comparacion 2H " + stage.getHours());
      if (ingreso.getHours() + 2.5 == stage.getHours()) {
        // console.log(ingreso.getMinutes() + " comparacion M " + stage.getMinutes());
        if (ingreso.getMinutes() >= stage.getMinutes()) {
          console.log("no hay retraso en la carga x mnutos");
          return true;
        } else {
          console.log("LA CARGA ESTA RETRASADA");
          return false;//esta retrasada la carga
        }
      } else {
        console.log("LA CARGA ESTA RETRASADA");
    
        return false;//esta retrasada la carga
      }
    }
  }

  calculateDelay() {
    if (this.cellValue != null) {
      // console.log("estoy comparandco las fechas");
      if (this.compareDates(this.horaLlegada, this.cellValue)) {

          //this.delayStage.emit(true);
        console.log("no cambio el estado")
      } else {
        console.log("EMITIENDO EL FALSE Y CAMBIANDO E ESTADO A")
        this.estado=false;
        this.delayStage.emit(false);
      }

    }
    else {
      console.log("no compare ;)")
    }
  }

  ngOnInit() {
    console.log("hello estoy en OnInit" + this.cellValue + " y " + this.horaLlegada)
    console.log("estado: "+this.estado)
    if (this.estado){
    this.calculateDelay();
    }
  }



}
