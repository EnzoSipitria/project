import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Carga } from '../model/carga';
import { WebsocketService } from './web-socket.service';


@Injectable()
export class CamionesService {

  public messages: Subject<Carga>;
  
  constructor(private http : HttpClient, wsService: WebsocketService) {
    this.messages = <Subject<Carga>>wsService
			.connect("ws://localhost:51907/api/cargas/subscribe")
			.map((response: MessageEvent): Carga => {
				return JSON.parse(response.data);
			});
  }

  getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>("http://localhost:51907/api/Cargas/All");
  }

}
