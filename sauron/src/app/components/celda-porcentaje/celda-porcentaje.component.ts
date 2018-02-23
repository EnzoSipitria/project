import { Component, OnInit, Input, Output, EventEmitter, ElementRef, SimpleChange } from '@angular/core';
import { Carga } from '../../model/carga';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { PorcentajeCarga } from '../../model/porcentajeCarga';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { Etapa } from '../../model/etapa';

@Component({
  selector: '[app-celda-porcentaje]',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {

  @Input() carga: Carga;
  @Input() rowIndex: number;
  @Input() stepIndex: number;
  mix: EtapaProgreso;
  full: EtapaProgreso;
  complete: boolean;
  @Output() onComplete: EventEmitter<Carga> = new EventEmitter<Carga>();

  constructor(private porcentajeCargaService: PorcentajeCargaService) {
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

  setProgress(percent) {
    return {
      'background': 'linear-gradient(90deg, ' + (this.rowIndex % 2 == 0 ? ' rgb(80, 132, 79) ' : 'rgb(43, 97, 43)') + percent + '%, ' + (this.rowIndex % 2 == 0 ? '#2c3034' : '#424242') + ' 0%)',
      'border': '1px solid #2c3034',
      'border-width': '0px 1px 0px 0px'
    }
  }


  autoFill() {
    let mixFill = setInterval(() => {
      if (this.mix) {
        if (this.mix.progreso == 100) clearInterval(mixFill);
        else this.mix.progreso++;
      }
    }, Math.random() * (300 - 100) + 100);
    let fullFill = setInterval(() => {
      if (this.full) {
        if (this.full.progreso == 100) clearInterval(fullFill);
        else this.full.progreso++;
      }
    }, Math.random() * (300 - 100) + 100);
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
