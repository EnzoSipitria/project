import { Component, OnInit } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';

@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  cargas: Carga[];

  constructor(private camionesService: CamionesService) {
    this.cargas = [];
    camionesService.newCargas.subscribe(data => {
      this.cargas.unshift(data);
    });
    camionesService.updateCargas.subscribe(data => {
      let carga = this.cargas.findIndex(carga => carga.id == data.id);
      this.cargas[carga] = data;
    });
  }

  ngOnInit() {
    this.camionesService.getCargas().subscribe(cargas => {
      this.cargas = cargas
    }
    );
  }

}
