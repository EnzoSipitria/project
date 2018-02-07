import { Component, OnInit, Input } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  loads: Carga[];
  completedStage: boolean;


  //se pueden agregar boolean por cada stage?? eso puede servir para que funicione el control

  addCarga() { }


  stageStatus(llegada: Date, timeActualStage: Date) {

    if (this.compareDates(llegada, timeActualStage)) {
      alert("la comparacion es buena" + llegada + "    nnnnnn     " + timeActualStage);
      this.completedStage = true;
    } else {
      alert("bad comparison");
      this.completedStage = false;
    }
  }


 compareDates(ingreso: Date, stage: Date): boolean {
    console.log(ingreso+"  "+stage);
    
    var horasNow = ingreso.getUTCHours();
    var minutosNow = ingreso.getUTCMinutes();
    var horasStage = stage.getUTCHours();
    var minutesStage = stage.getUTCMinutes();
    if (horasNow + 2.5 > horasStage) {
      return true;
    } else {
      if (horasNow + 2.5 == horasStage) {
        if (minutosNow >= minutesStage) {
          return true;
        } else {
          return false;
        }
      }
    }
 


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