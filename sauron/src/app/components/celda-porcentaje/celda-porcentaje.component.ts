import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celda-porcentaje',
  templateUrl: './celda-porcentaje.component.html',
  styleUrls: ['./celda-porcentaje.component.css']
})
export class CeldaPorcentajeComponent implements OnInit {
  value: number;
 
  constructor() { }

  ngOnInit() {
    this.value = 10;
  
  }

}
