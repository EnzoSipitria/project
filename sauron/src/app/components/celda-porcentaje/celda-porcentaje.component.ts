import { Component, OnInit, Input } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: '[app-celda-porcentaje]',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {

  carga: Carga;
  mixPercent: number;
  fullPercent: number;

  constructor() {
    this.mixPercent = 50;
    this.fullPercent = 10;
  }

  ngOnInit() {

  }


}
