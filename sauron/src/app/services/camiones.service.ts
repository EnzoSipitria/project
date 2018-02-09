import { Injectable } from '@angular/core';
//import { CAMIONES } from '../mock/camiones-mock'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Carga } from '../model/carga';

@Injectable()
export class CamionesService {

  
  constructor(private http : HttpClient) {
  }

  getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>("http://localhost:51907/api/Cargas/All");
  }

}
