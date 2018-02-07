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

 
 
      constructor() {

       }

  ngOnInit() {
    if (typeof this.currentProgress === 'undefined') {
      console.log(name + ' is undefined');
      this.currentProgress=0;
  }

    
  }

}
