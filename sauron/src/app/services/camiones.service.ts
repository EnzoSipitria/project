import { Injectable } from '@angular/core';
import { CAMIONES } from '../mock/camiones-mock'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Carga } from '../model/carga';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Porcentaje } from '../model/porcentaje';
import { Camion } from '../model/camion';

@Injectable()
export class CamionesService {

  private url = environment.apiUrl + "all";
  private camionUrl = environment.apiCamion + "all";
  /**
   *
   */

   cargas:Carga[];
  constructor(private http: HttpClient) {

  }

  public getCamiones(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionUrl);
  }

  /**
   * getPorcentajes
 :Observable<porcentaje>  */
  public getPorcentajes(idCarga: number): Observable<Porcentaje> {
    var valueFull = Math.floor(Math.random() * 100);
    var valueMix = Math.floor(Math.random() * 100);
    var porcentaje = new Porcentaje(idCarga, valueFull, valueMix);
    return of(porcentaje);


  }
  public getCargasOnService(){
    
  }

  public getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>(this.url);
    // return of(CAMIONES);
  }

}
