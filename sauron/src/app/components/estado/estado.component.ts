import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { Carga } from '../../model/carga';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  // @Input() carga: Carga;
  @Input() status: boolean;


  constructor() {
    // this.status=true;
  }


  // checkStatus(): boolean {
  //   var llegada: Date = this.carga.llegadaRDC;
  //   for (let prop of Object.keys(this.carga)) {
  //     console.log("========" + prop + "========");
  //     if (this.status != false) {
  //       if (prop != null && prop != "anden" && prop != "llegadaRDC" && prop != "camion" && prop != "estado" && prop != "full" && prop != "mix") {
  //         var stage: Date = this.carga[prop]
  //         console.log(llegada + " ////// " + stage)
  //         if (!this.compareDates(llegada, stage)) {
  //           this.status = false;
  //           console.log("estado falso qeuda rojo");
  //         }// compare dates retorno true
  //       }//propiedad no controlada par el estado
  //     }//status es true x lo tanto no comparo mas
  //     console.log("=============");
  //   }
  //   return true;
  // }


  // /**
  //  * cambiar el 2.5 constante en codigo por una variable que defina el retraso aceptado
  //  * @param ingreso es la hora de ingreso al RDC
  //  * @param stage es la etapa actual que se esta evaluando si esta retrasada o no
  //  */
  // compareDates(ingreso: Date, stage: Date): boolean {
  //   // console.log(ingreso.getHours() + " comparacion H " + stage.getHours());
  //   if ((ingreso.getHours() + 2.5) > stage.getHours()) {
  //     console.log("no hay retraso en la carga");
  //     return true;

  //   } else {
  //     // console.log(ingreso.getHours() + " comparacion 2H " + stage.getHours());
  //     if (ingreso.getHours() + 2.5 == stage.getHours()) {
  //       // console.log(ingreso.getMinutes() + " comparacion M " + stage.getMinutes());
  //       if (ingreso.getMinutes() >= stage.getMinutes()) {
  //         console.log("no hay retraso en la carga x mnutos");
  //         return true;
  //       } else {
  //         console.log("LA CARGA ESTA RETRASADA");
  //         return false;//esta retrasada la carga
  //       }
  //     } else {
  //       console.log("LA CARGA ESTA RETRASADA");

  //       return false;//esta retrasada la carga
  //     }
  //   }
  // }

  ngOnChanges() {
    console.log("on change estado component: "+this.status);
    //this.checkStatus();
  }


  ngOnInit() {
    //this.checkStatus();

    //alert(this.carga.estado);
    // this.setStatus(

  }

}
