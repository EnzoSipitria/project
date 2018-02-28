import { Component, OnInit } from '@angular/core';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { CeldaPorcentajeComponent } from '../celda-porcentaje/celda-porcentaje.component';

@Component({
  selector: '[app-fullmix]',
  templateUrl: './fullmix.component.html',
  styleUrls: ['../celda-porcentaje/celda-porcentaje.component.css', './fullmix.component.css']
})
export class FullmixComponent extends CeldaPorcentajeComponent{


  private mix: EtapaProgreso;
  private full: EtapaProgreso;

  constructor(private porcentajeCargaService: PorcentajeCargaService) {
   super();
  }

  ngOnInit() {
    this.porcentajeCargaService.getPorcentaje(this.carga.id).subscribe(
      porcentajes => {
        this.full = this.carga.etapas[this.stepIndex] as EtapaProgreso;
        this.mix = this.carga.etapas[this.stepIndex + 1] as EtapaProgreso;
        if (porcentajes) {
          this.full.progreso = porcentajes.full;
          this.mix.progreso = porcentajes.mix;
        }
      }
    );
   this.autoFill();
  }

  autoFill() {
    let mixFill = setInterval(() => {
      if (this.mix) {
        if (this.mix.progreso == 100) clearInterval(mixFill);
        else this.mix.progreso++;
      }
    }, Math.random() * (200 - 50) + 50);
    let fullFill = setInterval(() => {
      if (this.full) {
        if (this.full.progreso == 100) clearInterval(fullFill);
        else this.full.progreso++;
      }
    }, Math.random() * (200 - 50) + 50);
    let checkFull = setInterval(() => {
      if (this.mix && this.full) {
        if (this.mix.progreso == 100 && this.full.progreso == 100) {
          clearInterval(checkFull);
          this.complete = true;
          this.onComplete.emit(this.carga);
        }
      }
    });
  }

}
