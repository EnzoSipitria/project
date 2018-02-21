import { Component, OnInit, Input, Output, EventEmitter, ElementRef, SimpleChange } from '@angular/core';
import { Carga } from '../../model/carga';
import { PorcentajeCargaService } from '../../services/porcentaje-carga.service';
import { PorcentajeCarga } from '../../model/porcentajeCarga';

@Component({
  selector: '[app-celda-porcentaje]',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {

  @Input() carga: Carga;
  @Input() rowIndex: number;
  porcentajes: PorcentajeCarga
  complete: boolean;
  @Output() onComplete: EventEmitter<Carga> = new EventEmitter<Carga>();

  constructor(private porcentajeCargaService: PorcentajeCargaService) {
  }

  ngOnInit() {
    this.porcentajeCargaService.getPorcentaje(this.carga.id).subscribe(
      porcentajes => {
        this.carga.porcentaje = porcentajes;
      }
    );
    this.autoFill();
  }

  setProgress(percent){
    return { 
      'background': 'linear-gradient(90deg, ' + (this.rowIndex % 2 == 0 ? ' rgb(80, 132, 79) ' : 'rgb(43, 97, 43)') + percent + '%, ' + (this.rowIndex % 2 == 0 ? '#2c3034' : '#424242') + ' 0%)',
      'border': '1px solid #2c3034',
      'border-width': '0px 1px 0px 0px'
    }
  }


  autoFill() {
    let mixFill = setInterval(() => {
      if (this.carga.porcentaje) {
        if (this.carga.porcentaje.mix == 100) clearInterval(mixFill);
        else this.carga.porcentaje.mix++;
      }
    }, Math.random() * (500 - 100) + 100);
    let fullFill = setInterval(() => {
      if (this.carga.porcentaje) {
        if (this.carga.porcentaje.full == 100) clearInterval(fullFill);
        else this.carga.porcentaje.full++;
      }
    }, Math.random() * (500 - 100) + 100);
    let checkFull = setInterval(() => {
      if (this.carga.porcentaje) {
        if (this.carga.porcentaje.mix == 100 && this.carga.porcentaje.full == 100) {
          clearInterval(checkFull);
          this.complete = true;
          this.onComplete.emit(this.carga);
        }
      }
    });
  }


}
