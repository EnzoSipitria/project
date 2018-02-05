import { Component, OnInit } from '@angular/core';
import { Carga } from './model/carga';
import { CamionesService } from './services/camiones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
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
