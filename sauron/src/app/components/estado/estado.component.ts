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
  limite = {
    horas: 2,
    minutos: 30
  };

  constructor() { }

  ngOnInit() {
    
    setInterval(() => this.checkProgress(), 1000);
  }

  checkProgress() {
    let lastStep = this.getLastStep();
    this.valido = lastStep.getHours() - this.carga.llegadaRDC.getHours() <= this.limite.horas && 
    Math.abs(this.getLastStep().getMinutes() - this.carga.llegadaRDC.getMinutes()) <= this.limite.minutos; 
  }

  getLastStep() : Date{
    let lastStepTime;
    for (var property in this.carga) {
      if (this.carga.hasOwnProperty(property)) {
        lastStepTime = this.carga[property];
      }
    }
    return lastStepTime;
  }

}
