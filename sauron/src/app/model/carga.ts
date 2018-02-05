import { Camion } from './camion';

export class Carga {
    camion: Camion;
    anden: string;
    llegadaRDC?: Date;
    enrampe?: Date;
    full?: number;
    mix?: number;
    empiezaCarga?: Date;
    terminaCarga?: Date;
    initFacturacion?: Date;
    endFacturacion?: Date;
    salidaRDC?: Date;
    llegadaDeposito?: Date;
}
