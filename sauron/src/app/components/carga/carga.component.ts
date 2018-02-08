import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CamionesService } from '../../services/camiones.service';
import { Carga } from '../../model/carga';
import { EstadoComponent } from '../estado/estado.component';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit, AfterViewInit {

  loads: Carga[];
  @Input() delayedStage: boolean;
  carga:Carga;
  intervalIdF=0;
  intervalIdM=1;

 

  @ViewChild(EstadoComponent) status:EstadoComponent;
  
  
  ngAfterViewInit() {
    // this.updateCargaFull();
    // this.updateCargaMix();
    this.delayedStage=this.status.status;
  }



 stopInterval(){
   console.log("stoped interval");
  clearInterval(this.intervalIdF);
  clearInterval(this.intervalIdM);
 }
  
  updateCargaFull(){
    console.log("startFUll Interval"+this.carga);
    if (this.carga != null){
    this.intervalIdF = window.setInterval(() => {
      if (this.carga.full === 100) {
        this.carga.full=0;
      } else {
        this.carga.full+=5;
      }
    }, 15000);
  }
  }
  updateCargaMix(){
    console.log("start mix Interval");
    if (this.carga != null){
    this.intervalIdM = window.setInterval(() => {
      if (this.carga.mix === 100) {
        console.log("reset the percentage");
        this.carga.mix=0;
      } else {
        console.log("adde charge");
        this.carga.mix+=5;
      }
    }, 1000);
  }
 
  }

  startInterval(){
    // this.updateCargaFull();
    // this.updateCargaMix();
    
  }

  /**
   *
   */
  constructor(private dataService: CamionesService) { }

  ngOnInit() {
    this.getLoads();
   
  }

  /*
  *sirve para chekear que un stage este completado o no, considerando que undefined or null como false y solo 
  *completa el background si tiene algun valor
  */
  checkValue(value): boolean {
    if (typeof value === "undefined") {
      // console.log(value + "class carga componente undefined");
      return false;
    } else if (value === null) {
      // console.log("class carga componente null");
      return false;
    } else {
      // console.log("fue verdadero");
      return true;
    }
  }
  getLoads() {
    this.dataService.getCargas()
      .subscribe(cargas => this.loads = cargas);
  }
}