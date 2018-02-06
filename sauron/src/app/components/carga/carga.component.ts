import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  loads: Carga[];

  /**
   *
   */
  constructor(private dataService:CamionesService) { }

  ngOnInit(){
    this.getLoads();

  }
  

  getLoads(){
    this.dataService.getCargas()
    .subscribe( cargas => this.loads = cargas);
  }
}