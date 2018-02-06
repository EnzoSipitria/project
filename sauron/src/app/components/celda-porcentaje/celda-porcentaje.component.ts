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
  @Input() currentProgress: number = 50;
 //currentProgress: number = 50
 // @ViewChild ('#FULL', {read: ElementRef}) ProgBar: ElementRef;

 // ngOnChanges(changes: SimpleChanges): void {
  //  if (changes['currentProgress'].currentValue !== changes['currentProgress'].previousValue) {
  //    this.updateProgress();
  //  }
 // }

  ngAfterViewInit(): void {

    this.currentProgress = 25;

  }
 

      constructor() { }



  ngOnInit() {
   this.currentProgress = 0;
  }

}
