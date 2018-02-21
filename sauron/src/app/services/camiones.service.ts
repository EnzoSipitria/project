import { Injectable } from '@angular/core';
import { CAMIONES } from '../mock/camiones-mock'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Carga } from '../model/carga';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Porcentaje } from '../model/porcentaje';
import { Camion } from '../model/camion';

@Injectable()
export class CamionesService {

  private url = environment.apiUrl + "all";
  private camionUrl = environment.apiCamion + "all";
  private cargasIdUrl = environment.apiUrl + "ids";
  private newCargaUrl = environment.apiUrl + "create";
  private updateCargaUrl = environment.apiUrl + "update";
  /**
   *
   */

   cargas:Carga[];
  constructor(private http: HttpClient) {

  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  postNewCarga(carga: Carga){
    console.log(carga);
    let body= JSON.stringify(carga);
    
    //     let params = "json="+body;
        let headers = new HttpHeaders().set('Content-Type','application/json');
         
        console.log(this.http.post(this.newCargaUrl, body,{headers:headers})
      .subscribe(data => console.log(data)));

    // return this.http.post("http://jsonplaceholder.typicode.com/posts", body)
    
    
    // .map(this.extractData)
} 


  postUpdateCarga(body:any):Observable<any>{

    return this.http.post(this.updateCargaUrl, body);
  }


  public getCamiones(): Observable<Camion[]> {
    return this.http.get<Camion[]>(this.camionUrl);
  }

  /**
   * getPorcentajes
 :Observable<porcentaje>  */
  public getPorcentajes(id:number): Observable<Porcentaje> {
    var valueFull = Math.floor(Math.random() * 100);
    var valueMix = Math.floor(Math.random() * 100);
    var porcentaje = new Porcentaje(id, valueFull, valueMix);
    return of(porcentaje);
  }
  //override del metodo para que anden las dos versiones que tengo de tabla
  public getPorcentajesT2(): Observable<Porcentaje> {
    var valueFull = Math.floor(Math.random() * 100);
    var valueMix = Math.floor(Math.random() * 100);
    var porcentaje = new Porcentaje(Math.floor(Math.random()*500), valueFull, valueMix);
    return of(porcentaje);


  }
  public getCargasOnService(): Observable<Number[]>{
    return this.http.get<Number[]>(this.cargasIdUrl)  
  }

  public getCargas(): Observable<Carga[]> {
    return this.http.get<Carga[]>(this.url);
    // return of(CAMIONES);
  }

}
