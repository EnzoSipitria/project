import { Component, OnInit, Input} from '@angular/core';

//import {  } from '@angular/core';
//import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-celda-porcentaje',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit  {
  /*
  * quizas hay que agregar otra variable para el progreso del MIX
  *
  **/
  @Input() currentProgress: number;
  intervalIdF=0;
  updateCargaFull(){
    
    console.log("startFUll Interval"+this.currentProgress);
    if (this.currentProgress != null){
    this.intervalIdF = window.setInterval(() => {
      if (this.currentProgress >= 100) {
        this.currentProgress=0;
      } else {
        if ((100-this.currentProgress)>5) {
          this.currentProgress+=5;
        } else {
          this.currentProgress=100;
        }
      }
    }, 7000);
  }
  }
 stop(){
  clearInterval(this.intervalIdF);
 }    
  constructor() {

       }

  ngOnInit() {
    if (typeof this.currentProgress === 'undefined') {
     // console.log(name + ' is undefined');
     this.currentProgress=0;
    }else{
      this.updateCargaFull();
    }

    
  }

}
