import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Carga } from '../../model/carga';
import { CAMIONES } from '../../mock/camiones-mock';
import { PORCENTAJES } from '../../mock/porcentajes-mock';
import { Porcentaje } from '../../model/porcentaje';

@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor() { }
  date: Date = new Date();
  cargas: Carga[];
  porcentajes: Porcentaje[];
  ngOnInit() {
    this.cargas = CAMIONES;
    this.porcentajes = PORCENTAJES;
  }
}
