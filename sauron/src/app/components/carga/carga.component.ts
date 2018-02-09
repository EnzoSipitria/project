import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';
import { EstadoComponent } from '../estado/estado.component';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit, OnChanges {

  loads: Carga[];




  @ViewChild(EstadoComponent) status: EstadoComponent;

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }






  /**
   *
   */
  constructor(private dataService: CamionesService) { }

  ngOnInit() {
    this.getLoads();

  }

  /*
  *sirve para chekear que un stage este completado o no, considerando que undefined or null como false y solo 
  *completa el background si tiene algun valor
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
  getLoads() {
    this.dataService.getCargas()
      .subscribe(cargas => this.loads = cargas);
  }
}