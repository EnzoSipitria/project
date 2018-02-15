import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';
import { EstadoComponent } from '../estado/estado.component';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit, OnChanges {

  selectedCol: string;
  loads: Carga[];




  @ViewChild(EstadoComponent) status: EstadoComponent;

  ngOnChanges(changes: SimpleChanges): void {
  }


  orderByCol(column: string) {
    console.log("click event on column");
    this.selectedCol = column;
  }



  /**
   *
   */
  constructor(private dataService: CamionesService) { }

  ngOnInit() {
    this.getLoads();
    this.selectedCol='llegadaRDC';
  }


  getLoads() {
    this.dataService.getCargas()
      .subscribe(cargas => this.loads = cargas);
  }

}