import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { DatePipe } from '@angular/common';
import { Carga } from '../../model/carga';
import { Porcentaje } from '../../model/porcentaje';


import { PORCENTAJES } from '../../mock/porcentajes-mock';


@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  date: Date = new Date();
  cargas: Carga[];
  porcentajes: any[] = PORCENTAJES;

  constructor(private _camionesService: CamionesService) {

  }

  ngOnInit() {
    this._camionesService.getCargas().subscribe(cargas => {
       this.cargas = cargas;
      });

  }
  getPorcentajes(carga) {

    let result = true;
    for (let i of this.porcentajes) {

      if (carga['id'] === i.id_carga ) {
        result = false;
      }
    }
    return result;
  }

  getFull(carga) {
    let result;
    for (let i of this.porcentajes) {
      if (carga['id'] === i.id_carga ) {
        result = i.full;
      }
    }
    return result;
  }
  getMix(carga) {
    let result;
    for (let i of this.porcentajes) {
      if (carga['id'] === i.id_carga ) {
        result = i.mix;
      }
    }
    return result;
  }
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
}


