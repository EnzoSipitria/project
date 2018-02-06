import { Component, OnInit, Input } from '@angular/core';
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
  porcentajes: PorcentajeCarga

  constructor(private porcentajeCargaService: PorcentajeCargaService) { }

  ngOnInit() {
    this.porcentajeCargaService.getPorcentaje(this.carga.id).subscribe(
      porcentajes => this.porcentajes = porcentajes
    );
  }


}
