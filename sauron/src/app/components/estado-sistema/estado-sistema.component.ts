import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-estado-sistema',
  templateUrl: './estado-sistema.component.html',
  styleUrls: ['./estado-sistema.component.css']
})
export class EstadoSistemaComponent implements OnInit {

  connected : boolean;

  constructor(private connection : ConnectionService) {
    this.connected = connection.online;
  }

  ngOnInit() {
    setInterval(() => this.connected = this.connection.online, 500);
  }



}
