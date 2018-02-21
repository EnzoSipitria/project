import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
  @Input() rowIndex : number;
  porcentajes: PorcentajeCarga
  complete: boolean;
  @Output() onComplete: EventEmitter<Carga> = new EventEmitter<Carga>();

  constructor(private porcentajeCargaService: PorcentajeCargaService) {
   }

  ngOnInit() {
    
    this.porcentajeCargaService.getPorcentaje(this.carga.id).subscribe(
      porcentajes => {
        this.porcentajes = porcentajes;
       // if(porcentajes) this.autoFill();
      }
    );
  }

  autoFill() {
    let mixFill = setInterval(() => {
      if (this.porcentajes.mix == 100) clearInterval(mixFill);
      else this.porcentajes.mix++;
    }, Math.random() * (500 - 100) + 100);
    let fullFill = setInterval(() => {
      if (this.porcentajes.full == 100) clearInterval(fullFill);
      else this.porcentajes.full++;
    }, Math.random() * (500 - 100) + 100);
    let checkFull = setInterval(() => {
      if (this.porcentajes.mix == 100 && this.porcentajes.full == 100) {
        clearInterval(checkFull);
        this.complete = true;
        this.onComplete.emit(this.carga);
      }
    });
  }


}
