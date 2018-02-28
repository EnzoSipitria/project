import { Component, OnInit } from '@angular/core';
import { CeldaPorcentajeComponent } from '../celda-porcentaje/celda-porcentaje.component';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { Etapa } from '../../model/etapa';
import { EtapaProgreso } from '../../model/etapaProgreso';

@Component({
  selector: '[app-avance]',
  templateUrl: './avance.component.html',
  styleUrls: ['../celda-porcentaje/celda-porcentaje.component.css', './avance.component.css']
})
export class AvanceComponent extends CeldaPorcentajeComponent {

  salida: Etapa;
  avance : EtapaProgreso;

  constructor() {
    super();
  }

  ngOnInit() {
    this.salida = this.carga.etapas.find(etapa => etapa.nombre == "Salida RDC");
    this.avance = this.carga.etapas.find(etapa => etapa.nombre == "Avance");
    let t = setInterval(() => {

      if (this.salida.hora) {
        if (this.avance.progreso == 100) {
          this.onComplete.emit(this.carga);
          clearInterval(t);
        }
        else if (this.avance.progreso >= 0) this.avance.progreso++;
      }
    }, 50);
  }

}
