import { Camion } from './camion';

export class Carga {
    camion: Camion;
    anden: string;
    llegadaRDC?: Date;
    enrampe?: Date;
    empiezaCarga?: Date;
    full?:number;
    mix?:number;
    terminaCarga?: Date;
    initFacturacion?: Date;
    endFacturacion?: Date;
    salidaRDC?: Date;
    llegadaDeposito?: Date;
    estado?:boolean;
}
