import { Component, OnInit } from '@angular/core';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { CeldaPorcentajeComponent } from '../celda-porcentaje/celda-porcentaje.component';

import { ConnectionService } from '../../services/connection.service';
import { Etapa } from '../../model/etapa';
import { Estado } from '../../model/estado';

@Component({
  selector: '[app-fullmix]',
  templateUrl: './fullmix.component.html',
  styleUrls: ['../celda-porcentaje/celda-porcentaje.component.css', './fullmix.component.css']
})
export class FullmixComponent extends CeldaPorcentajeComponent {

  private mix: Etapa;
  private full: Etapa;
  private mixProgress: number;
  private fullProgress: number;

  constructor(private porcentajeCargaService: PorcentajeCargaService, private connection: ConnectionService) {
    super();
    this.mixProgress = 0;
    this.fullProgress = 0;
  }

  ngOnInit() {

    this.porcentajeCargaService.getPorcentaje(this.carga.id).subscribe(
      porcentajes => {
        this.full = this.carga.getStep("FULL");
        this.mix = this.carga.getStep("MIX");
        if (porcentajes) {
          this.full.estado = Estado.EN_PROGRESO;
          this.mix.estado = Estado.EN_PROGRESO;

          this.mixProgress = porcentajes.mix;
          this.fullProgress = porcentajes.full;
        }
      }
    );
    this.autoFill();
  }

  autoFill() {
    let mixFill = setInterval(() => {
      if (this.mix.estado == Estado.EN_PROGRESO) {
        if (this.mixProgress == 100) clearInterval(mixFill);
        else if (this.connection.online) this.mixProgress++;
      }
    }, Math.random() * (200 - 50) + 50);
    let fullFill = setInterval(() => {
      if (this.full.estado == Estado.EN_PROGRESO) {
        if (this.fullProgress == 100) clearInterval(fullFill);
        else if (this.connection.online) this.fullProgress++;
      }
    }, Math.random() * (200 - 50) + 50);
    let checkFull = setInterval(() => {
      if (this.mix && this.full) {
        if (this.mixProgress == 100 && this.fullProgress == 100) {
          clearInterval(checkFull);
          this.mix.estado = Estado.FINALIZADO;
          this.full.estado = Estado.FINALIZADO;
          this.complete = true;
          this.onComplete.emit(this.carga);
        }
      }
    }, 200);
  }

}
