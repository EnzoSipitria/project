import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { DatePipe } from '@angular/common';
import { Carga } from '../../model/carga';
import { Mensaje } from '../../model/mensaje';

import { MENSAJES} from '../../mock/mensajes-mock';
import { CARGAS } from '../../mock/cargas-mock';



@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  date: Date = new Date();
  cargas: Carga[] ; // = CARGAS;
  mensajes: Mensaje[] = MENSAJES;
  i = 0;
  porcentaje: number;

  constructor(private _camionesService: CamionesService) {


}

  ngOnInit() {
    this._camionesService.getCargas().subscribe(cargas => {
       this.cargas = cargas;
      });
  }
  // Carga automatica de horarios
  horarios(carga) {
    // toma el ultimo horario y retorna un horario nuevo aumentado en randomMin(entre 20 y 40min)
  }

  // Porcentajes Full y Min
  obtenerPorcentaje() {
    // deja de utilizar getPorcentajes, getFull, getMix, porcentajes.mock
    // falta evaluar que si la etapa siguiente esta completada no debe entrar en el while
    while (this.i < 100) {
      console.log(this.i);
     this.porcentaje = this.i;
     this.i += 0.5;
      return this.porcentaje;
    }
    return 100;
  }
  // Estado de la carga
  getStatus(carga): boolean {

    let firstTime = carga.llegadaRDC;
    let lastTime;
    let prop;
    let result;

    for (prop in carga) {

      if (carga[prop] !== null && prop !== 'id' && prop !== 'camion' && prop !== 'anden' && prop !== 'llegadaDeposito') {

        lastTime = carga[prop];
      }
    }
    // 5400000 = 1 !/2 hs
    return (Date.parse(lastTime) - Date.parse(firstTime) > 5400000);
  }
  getStatusMenssage(carga) {

    let result = false;
    for (let i of this.mensajes) {

      if (carga['id'] === i.id_carga ) {
        result = true;
      }
    }
    return result;
  }
  getMenssage(carga) {
    let result;
    for (let i of this.mensajes) {
      if (carga['id'] === i.id_carga ) {
        result = i.mensaje;
      }
    }
    return result;
  }
}


