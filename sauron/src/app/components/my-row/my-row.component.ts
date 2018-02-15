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


  @Input('data') carga: Carga;
  // idCarga:number=this.carga.id;
  rowStatus: boolean = true;
  _counter: number = 0;
  porcentaje: Porcentaje;


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

  // console.log("call on the row component");

}



/**
 * eventHandler for delayStage
 * @param retraso estado de la celda proveniente del evento @output del comp cell
 */
onDelayStage(retraso: boolean) {
  this._counter += 1;
  console.log(this._counter + " cantidad de actualizaciones de esta row")
  if (retraso) {
    console.log("get value of retraso to pass it to the component " + retraso);
    this.rowStatus = !retraso;
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
