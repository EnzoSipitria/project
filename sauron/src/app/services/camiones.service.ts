import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Carga } from '../model/carga';

@Injectable()
export class CamionesService {

  cargasURL = 'http://localhost:51907/api/Cargas/all';

  constructor(private http: HttpClient ) { }

  getCargas(): Observable<Carga[]> {

    return this.http.get<Carga[]>(this.cargasURL).pipe(
      tap(cargas => console.log(`fetched cargas`)),
      catchError(this.handleError('getCargas', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('paso0');
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.error('paso1');
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
