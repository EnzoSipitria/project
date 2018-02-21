import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';
import { MatTableDataSource } from '@angular/material/table';
import { Porcentaje } from '../../model/porcentaje';

@Component({
  selector: 'app-carga2',
  templateUrl: './carga2.component.html',
  styleUrls: ['./carga2.component.css']
})
export class Carga2Component implements OnInit {
  
  // carga: Carga;
  porcentaje: Porcentaje;
  selectedCol: string;
  loads: Carga[];
  displayedColumns = ['camion.nombre','anden', 'llegadaRDC', 'enrampe', 'empiezaCarga','full','mix', 'terminaCarga', 'initFacturacion', 'endFacturacion','salidaRDC','LLegadaDeposito'];
  dataSource = new MatTableDataSource<Carga>(this.loads);

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

  getFullValue(): number {
    // si la etapa anterior no finalizo no se deberia cargar este valor
    // if (this.checkValue(this.carga.empiezaCarga)) {
      return this.porcentaje.fullValue;
    // }
    // return -1;
    // si la etapa anterior no finalizo no se deberia cargar este valor
  }


  getMixValue(): number {
  // if (this.checkValue(this.carga.empiezaCarga)) {
    return this.porcentaje.mixValue;
  // }
  // return -1;
  // si la etapa anterior no finalizo no se deberia cargar este valor
}

getPorcentajes() {
  this.dataService.getPorcentajesT2()
    .subscribe(valores => this.porcentaje = valores);
}







  /**
   *
   */
  constructor(private dataService: CamionesService) { }

  ngOnInit() {
    this.getLoads();
    this.getPorcentajes();
    this.selectedCol='llegadaRDC';
  }


  getLoads() {
    this.dataService.getCargas()
      .subscribe(cargas => this.loads = cargas);
  }

}

 