import { Component, OnInit, Input } from '@angular/core';
import { Carga } from '../../model/carga';
import { Estado } from '../../model/estado';
import { Etapa } from '../../model/etapa';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() carga: Carga;
  @Input() rowIndex: number;
  currentStatusIcon: string;
  limite: number = 9000000 * 6; // 2:30 hs en milisegundos

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      let step = this.getLastStep();
      if(step){
        switch (this.getLastStep().estado) {
          case Estado.FINALIZADO:
            this.currentStatusIcon = 'check_circle'
            break;
          case Estado.TARDE:
            this.currentStatusIcon = 'cancel'
            break;
          case Estado.DEMORADO:
            this.currentStatusIcon = 'info'
            break;
        }
      }
      else this.currentStatusIcon = 'check_circle'
    }, 300);

  }

  checkProgress() {
    for (let i = 0; i < this.carga.etapas.length; i++) {
      const etapa = this.carga.etapas[i];
      if (etapa.estado == Estado.TARDE) return false;
    }
    return true;
  }

  getLastStep(): Etapa {
    let finished = null;
    for (let i = 0; i < this.carga.etapas.length; i++) {
      const etapa = this.carga.etapas[i];
      if (etapa.hora) finished = etapa;
    }
    return finished;
  }

  getRowColor() {
    let step = this.getLastStep();
    if(step){
      switch (step.estado) {
        case Estado.TARDE:
          return { 'color': 'var(--red-odd)' }
        case Estado.DEMORADO:
          return { 'color': 'var(--yellow-odd)' }
      }
    }
    return { 'color': 'var(--green-odd)' }
  }



}
