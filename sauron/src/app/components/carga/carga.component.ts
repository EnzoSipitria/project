import { Component, OnInit, trigger, state, style, transition, animate, Output } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';
import { Etapa } from '../../model/etapa';
import { EtapaProgreso } from '../../model/etapaProgreso';
import { Estado } from '../../model/estado';

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

  constructor(private camionesService: CamionesService) {
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
    let step = this.getLastUnfinishedStep(carga);
    let lastStep = this.getLastFinishedStep(carga);
    let full = carga.etapas[carga.getFullMixIndex()] as EtapaProgreso;
    let mix = carga.etapas[carga.getFullMixIndex() + 1] as EtapaProgreso;

    if (step && step.nombre == 'Finaliza carga' && (!full.progreso || mix.progreso != 100 && full.progreso != 100)) {
      if (!full.progreso && !mix.progreso) {
        full.progreso = 0;
        mix.progreso = 0;
      }
    }
    else {
      if (step) {
        let newDate = null;
        let lastDate = null;

        if (lastStep == null) {
    //      lastDate = new Date(2018, 1, 1, step.horaEstimada.getHours() - this.randomRange(0, 1), (step.horaEstimada.getMinutes() - this.randomRange(0, 30)) % 60);
      //    console.log("No last step");
          
        }
        else {
          lastDate = lastStep.hora;
          console.log(lastDate);
          
        }
        lastDate.setFullYear(2018, 1, 1);
        while (newDate == null || newDate.getTime() - lastDate.getTime() <= 0) {
          newDate = new Date(2018, 1, 1, lastDate.getHours() + this.randomRange(0, 2), (lastDate.getMinutes() + this.randomRange(0, 60)) % 60);
        }

        console.log("New date was: " + newDate);
        console.log("Estimated was: " + step.horaEstimada);
        
        step.hora = newDate;

        if (step.hora.getTime() < step.horaEstimada.getTime()) {
          step.estado = Estado.FINALIZADO;
        }
        else if (step.hora.getTime() - step.horaEstimada.getTime() > 1800000){
          step.estado = Estado.DEMORADO;
        }
        else{
          step.estado = Estado.TARDE;
        }

        setTimeout(() => this.nextStep(carga), this.randomRange(5000, 15000));
      }
    }


  }

  start() {
    this.cargas.forEach(carga => {
      setTimeout(() => this.nextStep(carga), this.randomRange(2000, 5000));
    });
    setInterval(() => {
      let newCarga = new Carga();
      newCarga.id = this.randomRange(10000, 100000);
      newCarga.camion = {
        id: this.randomRange(10000, 100000),
        nombre: "Monte " + parseInt(this.randomRange(0, 50)),
        conductor: ""
      };
      newCarga.anden = parseInt(this.randomRange(0, 50)).toString();
      newCarga.etapas = [
        new Etapa(
          {
            nombre: "Llegada RDC",
            horaEstimada: new Date(2018, 1, 1, this.randomRange(0, 24), this.randomRange(0, 60)),
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Enrampe",
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Comienzo carga",
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
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Comienza facturación",
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Termina facturacion",
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Salida RDC",
            estado: Estado.FINALIZADO
          }
        ),
        new Etapa(
          {
            nombre: "Llegada Deposito",
            estado: Estado.FINALIZADO
          }
        )
      ];
      this.cargas.unshift(newCarga);
      setTimeout(() => this.nextStep(newCarga), this.randomRange(5000, 10000))

    }, this.randomRange(30000000, 60000000));
  }

  getLastUnfinishedStep(carga: Carga): Etapa {

    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (!etapa.hora && !(etapa instanceof EtapaProgreso)) { // bug
        return etapa;
      }
    }
    return null;
  }

  getLastFinishedStep(carga: Carga): Etapa {
    let finished: Etapa = null;
    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (etapa.hora) finished = etapa;
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

    // let className = {
    //   'completed' : etapa.estado == Estado.FINALIZADO,
    //   'waiting' : etapa.estado == Estado.
    // };
  }

}
