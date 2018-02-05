import { Component, OnInit, Input } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: '[app-celda-porcentaje]',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {

  @Input() carga: Carga;
  @Input() show: number;
  percent: number;

  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.carga.mix = 21;
      this.carga.full = 65;


    }, 100);
  }

  updateBar(){
    
  }

}
