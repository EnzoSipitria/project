import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Carga } from '../model/carga';
import { WebsocketService } from './web-socket.service';


@Injectable()
export class CamionesService {

  public cargas: Subject<Carga>;

  constructor(private http: HttpClient, private wsService: WebsocketService) {
    this.cargas = this.getSocket("ws://localhost:51907/api/socket/subscribe");
  }

  getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>("http://localhost:51907/api/Cargas/All");
  }

  private getSocket(socketUri) {
    return <Subject<Carga>>this.wsService.connect(socketUri).map((response: MessageEvent): Carga => {
      return JSON.parse(response.data);
    });
  }

}
