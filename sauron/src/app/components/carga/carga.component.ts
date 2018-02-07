import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Carga } from '../../model/carga';
import { CAMIONES } from '../../mock/camiones-mock';

@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor() { }

  cargas: Carga[];
  ngOnInit() {
    this.cargas = CAMIONES;
  }

  //document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
  //  this.MaterialProgress.setProgress(44);
  //});
}
