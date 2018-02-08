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
  limite : number = 9000000; // 2:30 hs en milisegundos

  constructor() { }

  ngOnInit() {
    setInterval(() => this.checkProgress(), 1000);
  }

  checkProgress() {
    let lastStep = this.getLastStep();
    this.valido = (lastStep.getTime() - this.carga.llegadaRDC.getTime()) <= this.limite; 
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
