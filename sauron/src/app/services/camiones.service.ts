import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Carga } from '../model/carga';
import { WebsocketService } from './web-socket.service';
import { map } from 'rxjs/operators';
import { Estado } from '../model/estado';
import { EtapaProgreso } from '../model/etapaProgreso';
import { Etapa } from '../model/etapa';


@Injectable()
export class CamionesService {

  public cargas: Subject<Carga>;

  constructor(private http: HttpClient, private wsService: WebsocketService) {
    this.cargas = this.getSocket("ws://localhost:51907/api/socket/subscribe");
  }

  getCargas(): Observable<Carga[]> {
    return this.http.get("http://localhost:51907/api/Cargas/All").pipe(

      map(res => {
        let cargas: Carga[] = [];

        for (const c in res) {
          const carga = res[c];
          let newCarga = new Carga();
          newCarga.id = carga.id;
          newCarga.camion = {
            id: carga.camion.id,
            nombre: carga.camion.nombre,
            conductor: carga.camion.conductor
          };
          newCarga.anden = carga.anden;
          newCarga.etapas = [
            new Etapa(
              {
                nombre: "Llegada RDC",
                hora: this.parseDate(carga.llegadaRDC),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Enrampe",
                hora: this.parseDate(carga.enrampe),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Comienzo carga",
                hora: this.parseDate(carga.empiezaCarga),
                estado: Estado.FINALIZADO
              }
            ),
            new EtapaProgreso(
              {
                nombre: "FULL"
              }
            ),
            new EtapaProgreso(
              {
                nombre: "MIX"
              }
            ),
            new Etapa(
              {
                nombre: "Finaliza carga",
                hora: this.parseDate(carga.terminaCarga),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Comienza facturación",
                hora: this.parseDate(carga.initFacturacion),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Termina facturacion",
                hora: this.parseDate(carga.endFacturacion),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Salida RDC",
                hora: this.parseDate(carga.salidaRDC),
                estado: Estado.FINALIZADO
              }
            ),
            new Etapa(
              {
                nombre: "Llegada Deposito",
                hora: this.parseDate(carga.llegadaDeposito),
                estado: Estado.FINALIZADO
              }
            )
          ];
          this.estimateDate(newCarga);
          cargas.push(newCarga);
        }
        return cargas;
      }
      )

    );
  }

  private getSocket(socketUri) {
    return <Subject<Carga>>this.wsService.connect(socketUri).map((response: MessageEvent): Carga => {
      return JSON.parse(response.data);
    });
  }

  private parseDate(date: string) {
    let parsedDate = Date.parse(date);
    if (isNaN(parsedDate)) return null;
    return new Date(parsedDate);

  }
  //remove
  private estimateDate(carga: Carga) {

    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (!(etapa instanceof EtapaProgreso)) {
        let etapaAnterior: Etapa = this.previousStep(carga, i);

        if (etapa.hora == null) {
          if(etapaAnterior){
            let hora = etapaAnterior.hora ? etapaAnterior.hora : etapaAnterior.horaEstimada;
            hora.setFullYear(2018, 1, 1);
            let newDate : Date = null;
            while (newDate == null || newDate.getTime() - hora.getTime() <= 0) {
              newDate = new Date(2018, 1, 1, hora.getHours() + this.randomRange(0, 2), (hora.getMinutes() + this.randomRange(0, 30)) % 60);
            }
            etapa.estado = Estado.PENDIENTE;
            etapa.horaEstimada = newDate;
          }
        }
      }

    }
  }

  private previousStep(carga, stepIndex){
    if(stepIndex == 0) return null;
    
    while(carga.etapas[--stepIndex] instanceof EtapaProgreso);
    
    return carga.etapas[stepIndex];

  }
  // remove
  private randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

}
