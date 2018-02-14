import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { DatePipe } from '@angular/common';
import { Carga } from '../../model/carga';


import { CAMIONES } from '../../mock/camiones-mock';


@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  date: Date = new Date();
  cargas: any = [];

  constructor(private _camionesService: CamionesService) { }

  ngOnInit() {
    this._camionesService.getCargas().subscribe(cargas =>  this.cargas = cargas);
    // console.log(cargas);
  }

  getStatus(carga): boolean {

    let firstTime;
    let lastTime;
    let prop;

    for (prop in carga)
      if (carga[prop] instanceof Date && !firstTime)
        firstTime = carga[prop];
    
    if (prop === 'llegadaDeposito')
      lastTime = carga['salidaRDC'];
    else
      lastTime = carga[prop];

    if (firstTime && lastTime)
      return (lastTime.getTime() - firstTime.getTime() > 7200000);
    else
      return false;
  }
}
