import { Component, OnInit, trigger, state, style, transition, animate, Output } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';
import { Etapa } from '../../model/etapa';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { Estado } from '../../model/estado';
import { ConnectionService } from '../../services/connection.service';


@Component({
  selector: '[app-carga]',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  animations: [
    trigger('smoothchange', [
      transition('void => *', [
        style({ opacity: '0' }), // from
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: '1' })) // to
      ])
    ])
  ]
})
export class CargaComponent implements OnInit {

  checkStepStatus(carga): any {
    for (let i = 0; i < carga.etapas.length - 1; i++) {
      if (carga.etapas[i].estado == Estado.PENDIENTE) {
        if (carga.etapas[i + 1].estado == Estado.FINALIZADO) {
          carga.etapas[i].estado = Estado.FINALIZADO;
        }
      }
    }
  }

  cargas: Carga[];

  constructor(private camionesService: CamionesService, private connection: ConnectionService) {
    this.cargas = [];
    camionesService.cargas.subscribe(data => {
      this.updateCurrentList(data);
    });
  }

  ngOnInit() {
    this.camionesService.getCargas().subscribe(cargas => {
      this.cargas = cargas;
      this.start();
    }
    );
  }

  updateCurrentList(data) {
    switch (data.type) {
      case "NEW_CARGA":
        this.cargas.unshift(data);
        break;
      case "UPDATE_CARGA":
        let carga = this.cargas.findIndex(carga => carga.id == data.id);
        this.cargas[carga] = data;
        break;
    }
  }

  // generation code
  nextStep(carga: Carga) {
    if (this.connection.online) {
      let step = this.getLastUnfinishedStep(carga);
      let lastStep = this.getLastFinishedStep(carga);
      let full = carga.getStep("FULL");
      let mix = carga.getStep("MIX");
      let avance = carga.getStep("Avance");

      if (step) {
        if (step.nombre == 'Finaliza carga' && !full.isCompleted(true)) {
          full.estado = Estado.EN_PROGRESO;
          mix.estado = Estado.EN_PROGRESO;
        }
        else if (step.nombre == 'Llegada Deposito' && !avance.isCompleted(true)) {
          avance.estado = Estado.EN_PROGRESO;
        }
        else {
          let newDate = null;
          let lastDate = null;

          if (lastStep == null) {
            lastDate = new Date(2018, 1, 1, step.horaEstimada.getHours() - this.randomRange(0, 1), (step.horaEstimada.getMinutes() - this.randomRange(0, 30)) % 60);
          }
          else lastDate = lastStep.hora;


          lastDate.setFullYear(2018, 1, 1);
          while (newDate == null || newDate.getTime() - lastDate.getTime() <= 0) {
            newDate = new Date(2018, 1, 1, lastDate.getHours() + this.randomRange(0, 2), (lastDate.getMinutes() + this.randomRange(0, 60)) % 60);
          }

          step.hora = newDate;

          if (step.hora.getTime() < step.horaEstimada.getTime()) {
            step.estado = Estado.FINALIZADO;
          }
          else if (step.hora.getTime() - step.horaEstimada.getTime() > 1800000) {
            step.estado = Estado.DEMORADO;
          }
          else {
            step.estado = Estado.TARDE;
          }

          if (step.nombre == "Comienzo carga" || step.nombre == "Salida RDC") {
            this.nextStep(carga);
          }
          else setTimeout(() => this.nextStep(carga), this.randomRange(5000, 15000));
        }
      }


    }


  }

  start() {
    this.cargas.forEach(carga => {
      setTimeout(() => this.nextStep(carga), this.randomRange(2000, 5000));
    });
    setInterval(() => {
      if (this.connection.online) {
        let newCarga = this.camionesService.generateNewCarga();
        this.cargas.unshift(newCarga);
        setTimeout(() => this.nextStep(newCarga), this.randomRange(5000, 10000))
      }

    }, this.randomRange(10000, 20000));
  }

  getLastUnfinishedStep(carga: Carga): Etapa {

    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (etapa.estado == Estado.PENDIENTE) {
        return etapa;
      }
    }
    return null;
  }

  getLastFinishedStep(carga: Carga): Etapa {
    let finished: Etapa = null;
    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (etapa.isCompleted()) finished = etapa;
    }
    return finished;
  }

  randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  getStateColor(etapa: Etapa) {

    if (etapa.getValue()) {
      switch (etapa.estado) {
        case Estado.FINALIZADO:
          return 'completed';
        case Estado.TARDE:
          return 'late';
        case Estado.DEMORADO:
          return 'delayed';
        case Estado.PENDIENTE:
          return 'pending';
      }
    }
  }

}
