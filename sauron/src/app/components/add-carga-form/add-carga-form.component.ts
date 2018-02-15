import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Camion } from '../../model/camion';

@Component({
  selector: 'app-add-carga-form',
  templateUrl: './add-carga-form.component.html',
  styleUrls: ['./add-carga-form.component.css']
})
export class AddCargaFormComponent implements OnInit {
  camiones: Camion[];
  constructor(private dataService:CamionesService) { }


  getCamiones(){
      this.dataService.getCamiones()
      .subscribe(camiones => this.camiones = camiones)
  }
  ngOnInit() {
    this.getCamiones();
  }

}
