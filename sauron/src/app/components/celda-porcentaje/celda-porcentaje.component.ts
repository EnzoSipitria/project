import { Component, OnInit, Input, Output, EventEmitter, ElementRef, SimpleChange } from '@angular/core';
import { Carga } from '../../model/carga';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { PorcentajeCarga } from '../../model/porcentajeCarga';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { Etapa } from '../../model/etapa';

@Component({
  selector: '[app-celda-porcentaje]',
  template: ``,
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {

  @Input() protected carga: Carga;
  @Input() protected rowIndex: number;
  @Input() protected stepIndex: number;
  @Output() protected onComplete: EventEmitter<Carga> = new EventEmitter<Carga>();
  protected complete: boolean;

  constructor() { }

  ngOnInit() {
  }

  setProgress(percent) {
    if (!percent) {
      return {
        'font-size': '15px',
        'color': '#cecece'
      }
    }
    return {
      'background': 'linear-gradient(90deg, ' + (this.rowIndex % 2 == 0 ? ' rgb(80, 132, 79) ' : 'rgb(43, 97, 43)') + percent + '%, ' + (this.rowIndex % 2 == 0 ? '#2c3034' : '#424242') + ' 0%)',
      'border': '1px solid #2c3034',
      'border-width': '0px 1px 0px 0px'
    }

  }
}
