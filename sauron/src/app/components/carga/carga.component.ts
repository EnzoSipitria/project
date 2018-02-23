import { Component, OnInit, trigger, state, style, transition, animate, Output } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';
import { Etapa } from '../../model/etapa';
import { EtapaProgreso } from '../../model/etapaProgreso';

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

      // // parse all dates
      // this.cargas.forEach(carga => {
      //   for (let property in carga) {
      //     if (carga.hasOwnProperty(property) && carga[property]) {
      //       if(carga[property].length >= 19){
      //         let date = new Date(Date.parse(carga[property]));
      //         date.setFullYear(2018, 1, 1);
      //         carga[property] = date;
      //       }
      //     }
      //   }
      // });

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
        let newDate = null; // 5 
        lastStep.hora.setFullYear(2018, 1, 1);
        while (newDate == null || newDate.getTime() - lastStep.hora.getTime() <= 0) {
          newDate = new Date(2018, 1, 1, lastStep.hora.getHours() + this.randomRange(0, 2), (lastStep.hora.getMinutes() + this.randomRange(0, 30)) % 59);
        }
        step.hora = newDate;

        setTimeout(() => this.nextStep(carga), this.randomRange(5000, 15000));
      }
    }


  }

  start() {
    setTimeout(() => {
      this.cargas.forEach(carga => {
        this.nextStep(carga);
      });
    }, 1000);
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
    let finished = null;
    for (let i = 0; i < carga.etapas.length; i++) {
      const etapa = carga.etapas[i];
      if (etapa.hora) finished = etapa;
    }
    return finished;
  }

  randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

}
