import { Component, OnInit, trigger, state, style, transition, animate, Output } from '@angular/core';
import { Carga } from '../../model/carga';
import { CamionesService } from '../../services/camiones.service';

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
  nextStep(carga) {
    let step = this.getLastUnfinishedStep(carga);
    let lastStep = this.getLastFinishedStep(carga);

    if (step == 'terminaCarga' && (!carga.porcentaje || carga.porcentaje.mix != 100 && carga.porcentaje.full != 100)) {
      if(!carga.porcentaje){
        carga.porcentaje = {
          id: carga.id,
          full: 0,
          mix: 0,
        };
      }
    }
    else {
      if (step) {
        let newDate = null; // 5 
        lastStep.setFullYear(2018, 1, 1);
        while (newDate == null || newDate.getTime() - lastStep.getTime() <= 0) {
          newDate = new Date(2018, 1, 1, lastStep.getHours() + this.randomRange(0, 2), (lastStep.getMinutes() + this.randomRange(0, 30)) % 59);
        }
        carga[step] = newDate;

        setTimeout(() => this.nextStep(carga), this.randomRange(0, 10000));
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

  getLastUnfinishedStep(carga) {

    for (let property in carga) {
      if (carga.hasOwnProperty(property)) {
        if (!carga[property]) return property;
      }
    }
  }
  getLastFinishedStep(carga): Date {
    let finished = null;
    for (let property in carga) {
      if (carga.hasOwnProperty(property) && carga[property] && property != 'porcentaje') {
        finished = property;
      }
    }
    return new Date(Date.parse(carga[finished]));;
  }

  randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }



}
