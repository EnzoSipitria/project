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
      this.cargas = cargas
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
     
    if(false){
      carga[step] = new Date(2018, 1, 1, this.randomRange(1, 24), this.randomRange(0, 60));
      setTimeout(() => this.nextStep(carga) ,this.randomRange(0, 10000));
    }
  }

  getLastUnfinishedStep(carga) {

    for (let property in carga) {
      if (carga.hasOwnProperty(property)) {
        if (!carga[property]) return property;
      }
    }
  }

  randomRange(min, max){
    return Math.random() * (max - min) + min;
  }



}
