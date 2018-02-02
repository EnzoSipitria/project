import { Injectable } from '@angular/core';
import { CAMIONES } from '../mock/camiones-mock'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Carga } from '../model/carga';

@Injectable()
export class CamionesService {

  getCargas(): Observable<Carga[]> {
    return of(CAMIONES);
  }

}
