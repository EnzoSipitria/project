import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';
import { Porcentaje } from '../../model/porcentaje';
import { CellContentComponent } from '../cell-content/cell-content.component';

@Component({
  selector: '[my-row]',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit, OnChanges {

  /***
   * agregar control WARNING para los retrasos de los minutos solicitados
   * 
   */

   warning:boolean=false;
  @Input('data') carga: Carga;
  rowStatus: boolean = true;
  _counter: number = 0;
  porcentaje: Porcentaje;
  cellStatus:boolean;


  constructor(private dataService: CamionesService) {

  }

  getFullValue(): number {
    // si la etapa anterior no finalizo no se deberia cargar este valor
    if (this.checkValue(this.carga.empiezaCarga)) {
      return this.porcentaje.fullValue;
    }
    return -1;
    // si la etapa anterior no finalizo no se deberia cargar este valor
  }


  getMixValue(): number {
  if (this.checkValue(this.carga.empiezaCarga)) {
    return this.porcentaje.mixValue;
  }
  return -1;
  // si la etapa anterior no finalizo no se deberia cargar este valor
}

getPorcentajes() {
  this.dataService.getPorcentajes(this.carga.id)
    .subscribe(valores => this.porcentaje = valores);
}

ngOnInit() {
  this.getPorcentajes();
}



ngOnChanges(changes: SimpleChanges): void {

}

getClassName():string{
  if ( !this.warning && !this.rowStatus ){
    return "completed";
  }
  //  if (this.warning) {return "warning";}
  if (this.rowStatus)  {return "delayed";}
 // if (this.cellStatus){return "delayed"}

  // if (this.cellStatus){
  //   console.log("hjgvjhgvhjgvhjgvjhgvjghvghvgh");
  //   return "delayed";
  // }
  return "completed";
}

/**
 * eventHandler for delayStage
 * @param retraso estado de la celda proveniente del evento @output del comp cell
 */
onDelayStage(retraso: boolean) {
  
  this.warning=!retraso;
  this._counter += 1;
  console.log(this._counter + " cantidad de actualizaciones de esta row")
  if (retraso) {
    console.log("get value of retraso to pass it to the component " + retraso);
    this.rowStatus = !retraso;
    this.warning=retraso;
  }
}


/***
 * para ver que etapo retraso  la ruta
   * _estado en cell component es la que indica cual fue la etapa que se retraso 
 */
onEstadoCelda(status:boolean){
  console.log("evento del estado"+status);
  this.cellStatus=status;
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
  } else
    if (value === null) {
      // console.log("class carga componente null"+value);
      return false;
    } else {
      // console.log("fue verdadero");
      return true;
    }
}


}
