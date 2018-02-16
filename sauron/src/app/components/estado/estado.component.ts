import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() status: boolean;


  constructor() {
  }



  ngOnChanges() {
    console.log("on change estado component: "+this.status);
  }


  ngOnInit() {

  }

}
