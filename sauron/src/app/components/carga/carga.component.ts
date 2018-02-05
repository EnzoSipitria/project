import { Component, OnInit } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';

@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  cargas : Carga[];

  constructor(private camionesService : CamionesService) {
    this.cargas = [];
   }

  ngOnInit() {
    this.camionesService.getCargas().subscribe(cargas => this.cargas = cargas);
  }

}
