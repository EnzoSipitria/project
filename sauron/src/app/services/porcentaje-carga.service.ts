import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PORCENTAJE_CARGA } from '../mock/carga-porcentaje-mock';

@Injectable()
export class PorcentajeCargaService {

  getPorcentaje(idCarga){
    // el servicio real deberia poder ser accedido como "servicio/cargas/:id"
    return of(PORCENTAJE_CARGA.find(p => p.id == idCarga));
  }

}
