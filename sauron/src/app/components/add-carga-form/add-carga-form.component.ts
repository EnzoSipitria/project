import { Component, OnInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Camion } from '../../model/camion';
// import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-carga-form',
  templateUrl: './add-carga-form.component.html',
  styleUrls: ['./add-carga-form.component.css']
})
export class AddCargaFormComponent implements OnInit {
  camionSelected: string;
  camiones: Camion[];
  constructor(private dataService:CamionesService) { }



  getCamiones(){
      this.dataService.getCamiones()
      .subscribe(camiones => this.camiones = camiones)
  }

  ngOnInit() {
    this.camionSelected="";
    this.getCamiones();
  }

  onSubmit(){
    alert("submited form");
  }
  onReset(){
    alert("reseted Form")
  }

  selectedItem(item:string){
    this.camionSelected=item;
    alert(item);
  }
}
