import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: '[my-row]',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit, OnChanges {

  @Input('data') carga:Carga;
  // idCarga:number=this.carga.id;
  rowStatus:boolean=true;
  _counter:number=0;

  
  constructor() {

   }
  
  ngOnInit() {
    console.log("se inicio la row"+this.carga.camion.nombre)
  }
  


  ngOnChanges(changes: SimpleChanges): void {
    
    // console.log("call on the row component");

  }


  /**
   * eventHandler for delayStage
   * @param retraso estado de la celda proveniente del evento @output del comp cell
   */
  onDelayStage(retraso:boolean){
    this._counter+=1;
    // console.log(this._counter+" cantidad de actualizaciones de esta row")
    if (retraso){
      // console.log("get value of retraso to pass it to the component "+retraso);
      this.rowStatus=!retraso;
    }
  }

  /** 
   * this method checks the existence of value on the cell 
   * to set the class style completed for change the background color of the cell
   * 
   * 
   */
  checkValue(value): boolean {
    if (typeof value === "undefined") {
      // console.log(value + "class carga componente undefined");
      return false;
    } else if (value === null) {
      // console.log("class carga componente null");
      return false;
    } else {
      // console.log("fue verdadero");
      return true;
    }
  }
  


  checkStatus(): boolean {
    var llegada: Date = this.carga.llegadaRDC;
    for (let prop of Object.keys(this.carga)) {
      console.log("========" + prop + "========");
      //if (this.status != false) {
        if (prop != null && prop != "anden" && prop != "id" && prop != "llegadaRDC" && prop != "camion" && prop != "estado" && prop != "full" && prop != "mix") {
          var stage: Date = this.carga[prop]
          console.log(llegada + " ////// " + stage)
          if (!this.compareDates(llegada, stage)) {
            // console.log("estado falso qeuda rojo");
           return false;
          }// compare dates retorno true
        }//propiedad no controlada par el estado
      console.log("=============");
    }
    return true;
  }


  /**
   * cambiar el 2.5 constante en codigo por una variable que defina el retraso aceptado
   * @param ingreso es la hora de ingreso al RDC
   * @param stage es la etapa actual que se esta evaluando si esta retrasada o no
   */
  compareDates(ingreso: Date, stage: Date): boolean {
    // console.log(ingreso.getHours() + " comparacion H " + stage.getHours());
    if ((ingreso.getHours() + 2.5) > stage.getHours()) {
      // console.log("no hay retraso en la carga");
      return true;

    } else {
      // console.log(ingreso.getHours() + " comparacion 2H " + stage.getHours());
      if (ingreso.getHours() + 2.5 == stage.getHours()) {
        // console.log(ingreso.getMinutes() + " comparacion M " + stage.getMinutes());
        if (ingreso.getMinutes() >= stage.getMinutes()) {
          // console.log("no hay retraso en la carga x mnutos");
          return true;
        } else {
          // console.log("LA CARGA ESTA RETRASADA");
          return false;//esta retrasada la carga
        }
      } else {
        // console.log("LA CARGA ESTA RETRASADA");

        return false;//esta retrasada la carga
      }
    }
  }

}
