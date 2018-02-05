import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  status: boolean; 

  constructor() { }

  ngOnInit() {
    this.status=false;
  }

}
