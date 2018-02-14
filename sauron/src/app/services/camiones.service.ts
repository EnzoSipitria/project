import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CAMIONES } from '../mock/camiones-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Carga } from '../model/carga';

@Injectable()
export class CamionesService {

  cargasURL: string = 'http://localhost:51907/api/Cargas/All';

  constructor(private http: HttpClient ) { }

  getCargas() {
    return this.http.get(this.cargasURL);
  }

}
