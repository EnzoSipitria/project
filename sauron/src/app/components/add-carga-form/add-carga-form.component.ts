import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Camion } from '../../model/camion';
import { Carga } from '../../model/carga';
// import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-carga-form',
  templateUrl: './add-carga-form.component.html',
  styleUrls: ['./add-carga-form.component.css']
})
export class AddCargaFormComponent implements OnInit {
  // IdCargaList: Number[];
  camionSelected: Camion;
  camiones: Camion[];
  //
  modelCarga: Carga = new Carga(new Camion(),"",0,new Date());



  constructor(private dataService: CamionesService) { }



  getCamiones() {
    this.dataService.getCamiones()
      .subscribe(camiones => this.camiones = camiones)
  }

  ngOnInit() {
    this.getCamiones();
    // this.modelCarga.anden = "0";
    // this.modelCarga.camion.id=0;
    // this.modelCarga.camion.nombre="generic";
    // this.modelCarga.id=0;
  }

  onSubmit() {
   this.modelCarga.camion=this.camionSelected;
   this.dataService.postNewCarga(this.modelCarga);
    //call endpoint here
    //se agrega una carga con los datos necesarios
    alert("submited form \n"+this.modelCarga.anden+"\n"+this.modelCarga.id
  +"\n"+this.modelCarga.camion.id+" -- "+this.modelCarga.camion.nombre);
  }

  onReset() {
    alert("reseted Form");
  }
}
