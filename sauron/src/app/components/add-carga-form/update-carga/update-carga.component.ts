import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../../services/camiones.service';

@Component({
  selector: 'update-carga',
  templateUrl: './update-carga.component.html',
  styleUrls: ['./update-carga.component.css']
})
export class UpdateCargaComponent implements OnInit {
/**
 * para actualizar una tupla, se genera la tupla completa con el id y se envia pra hacer un delete y posterior update
 */
  IdCargaList: Number[];
  constructor(private dataService:CamionesService) { }
  modelId: Number;
  modelEtapa: string;
  modelHora: Number;

  ngOnInit() {
    this.getCargasId();
  }

  etapas: string[] = ["enrampe",
    "empieza Carga",
    "termina Carga",
    "inicio Facturacion",
    "fin facturacion",
    "Salida RDC",
    "Llegada Deposito",

  ];
  onSubmitUpdate() {
    alert("submited form");
    this.modelHora=Date.now();
    //call endpoint here
    // put update tupla
    //se actualiza una etapa con la hora
  }
  onResetUpdate() {
    alert("reseted Form");
  }
  getCargasId() {
    this.dataService.getCargasOnService()
      .subscribe(list => this.IdCargaList = list)
    //call endpoint here
  }
  getEtapas(): string[] {
    return this.etapas;
    //call endpoint here
  }

}
