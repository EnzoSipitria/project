import { Component, OnInit, Input } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  @Input() carga: Carga; 
  status: boolean;

  constructor() { }

  setStatus(){
    this.status=this.carga.estado;
  }

  ngOnInit() {

    //alert(this.carga.estado);
    this.setStatus();
    
  }

}
