import { Component, OnInit, Input } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() carga: Carga;
  valido: boolean;
  limite : number = 9000000  * 6; // 2:30 hs en milisegundos

  constructor() { }

  ngOnInit() {
   
   setInterval(() => this.checkProgress(), 300);
    // this.checkProgress();
  }

  checkProgress() {
    let lastStep = this.getLastStep();
    let firstStep = this.carga.etapas[0].hora;
    this.valido = (lastStep.getTime() - firstStep.getTime()) <= this.limite; 
  }

  getLastStep() : Date{
    let finished = null;
    for (let i = 0; i < this.carga.etapas.length; i++) {
      const etapa = this.carga.etapas[i];
      if (etapa.hora) finished = etapa;
    }
    return finished.hora;
  }

}
