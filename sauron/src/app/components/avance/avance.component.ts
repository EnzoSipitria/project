import { Component, OnInit } from '@angular/core';
import { CeldaPorcentajeComponent } from '../celda-porcentaje/celda-porcentaje.component';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { Etapa } from '../../model/etapa';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { ConnectionService } from '../../services/connection.service';
import { Estado } from '../../model/estado';

@Component({
  selector: '[app-avance]',
  templateUrl: './avance.component.html',
  styleUrls: ['../celda-porcentaje/celda-porcentaje.component.css', './avance.component.css']
})
export class AvanceComponent extends CeldaPorcentajeComponent {

  salida: Etapa;
  avance : Etapa;
  progreso: number;

  constructor(private connection : ConnectionService) {
    super();
    this.progreso = 0;
  }

  ngOnInit() {
    this.salida = this.carga.etapas.find(etapa => etapa.nombre == "Salida RDC");
    this.avance = this.carga.etapas.find(etapa => etapa.nombre == "Avance");
    let t = setInterval(() => {

      if (this.salida.isCompleted()) {
        if (this.progreso == 100) {
          this.avance.estado = Estado.FINALIZADO;
          this.onComplete.emit(this.carga);
          clearInterval(t);
        }
        else if (this.connection.online) this.progreso++;
      }
    }, 50);
  }

}
