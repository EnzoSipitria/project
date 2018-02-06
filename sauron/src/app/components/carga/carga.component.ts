import { Component, OnInit } from '@angular/core';
import { Carga } from '../../model/carga';
import { CAMIONES } from '../../mock/camiones-mock';

@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
